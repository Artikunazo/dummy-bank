-- Phase 1: Backend Expert Database Setup

-- Extension for UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── 1. TABLES ─────────────────────────────────────────────────────────────

-- PROFILES (Users)
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL UNIQUE, -- references auth.users in a real app, logic separated from db as requested
  email text,
  full_name text,
  phone_number text,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

-- ACCOUNTS (Base Account for a user)
CREATE TABLE public.accounts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
  balance numeric NOT NULL DEFAULT 0.00,
  currency text NOT NULL DEFAULT 'MXN',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- DEBIT CARDS
CREATE TABLE public.debit_cards (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  account_id uuid NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  last_four text NOT NULL,
  expiry_month int NOT NULL,
  expiry_year int NOT NULL,
  is_active boolean DEFAULT true,
  transfer_limit numeric DEFAULT 50000.00,
  created_at timestamptz DEFAULT now()
);

-- CREDIT APPLICATIONS (TDC, Mortgage, Auto, Personal Loans)
CREATE TABLE public.credit_applications (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('tdc', 'mortgage', 'auto', 'personal_loan')),
  status text NOT NULL CHECK (status IN ('pending', 'reviewing', 'approved', 'rejected', 'active', 'closed')),
  requested_amount numeric NOT NULL,
  approved_amount numeric,
  term_months int NOT NULL,
  interest_rate numeric NOT NULL,
  monthly_payment numeric,
  metadata jsonb DEFAULT '{}'::jsonb, -- Store specific product details (vehicle, property value, etc)
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- INVESTMENT PRODUCTS (Catalog of Plazo, Pagarés, Cetes)
CREATE TABLE public.investment_products (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  ticker text,
  category text NOT NULL CHECK (category IN ('cetes', 'etf', 'mutual_fund', 'bond', 'stock')),
  risk_level text NOT NULL CHECK (risk_level IN ('low', 'medium', 'high')),
  annual_return numeric NOT NULL,
  minimum_amount numeric NOT NULL,
  currency text DEFAULT 'MXN',
  description text,
  management_fee numeric DEFAULT 0.00,
  is_available boolean DEFAULT true
);

-- PORTFOLIOS (User's active investments)
CREATE TABLE public.portfolios (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES public.investment_products(id),
  shares numeric NOT NULL,
  purchase_price numeric NOT NULL,
  current_value numeric NOT NULL,
  purchased_at timestamptz DEFAULT now()
);

-- TRANSACTIONS
CREATE TABLE public.transactions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  account_id uuid NOT NULL REFERENCES public.accounts(id) ON DELETE CASCADE,
  amount numeric NOT NULL,
  type text NOT NULL,
  description text,
  balance_after numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);


-- ─── 2. ROW LEVEL SECURITY (RLS) ──────────────────────────────────────────

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.debit_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credit_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Note: investment_products is a catalog, so we allow wide reads.
ALTER TABLE public.investment_products ENABLE ROW LEVEL SECURITY;

-- Policies for Profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Policies for Accounts
CREATE POLICY "Users can view their own account" ON public.accounts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own account" ON public.accounts
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own account" ON public.accounts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policies for Debit Cards
CREATE POLICY "Users can view debit cards attached to their accounts" ON public.debit_cards
  FOR SELECT USING (
    account_id IN (SELECT id FROM public.accounts WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can update debit cards attached to their accounts" ON public.debit_cards
  FOR UPDATE USING (
    account_id IN (SELECT id FROM public.accounts WHERE user_id = auth.uid())
  );

CREATE POLICY "Users can insert debit cards attached to their accounts" ON public.debit_cards
  FOR INSERT WITH CHECK (
    account_id IN (SELECT id FROM public.accounts WHERE user_id = auth.uid())
  );

-- Policies for Credit Applications
CREATE POLICY "Users can manage their credit applications" ON public.credit_applications
  FOR ALL USING (auth.uid() = user_id);

-- Policies for Portfolios
CREATE POLICY "Users can manage their portfolios" ON public.portfolios
  FOR ALL USING (auth.uid() = user_id);

-- Policies for Transactions
CREATE POLICY "Users can view their own transactions" ON public.transactions
  FOR SELECT USING (
    account_id IN (SELECT id FROM public.accounts WHERE user_id = auth.uid())
  );
  
CREATE POLICY "Users can insert their own transactions" ON public.transactions
  FOR INSERT WITH CHECK (
    account_id IN (SELECT id FROM public.accounts WHERE user_id = auth.uid())
  );

-- Policies for Catalog
CREATE POLICY "Everyone can read available investment products" ON public.investment_products
  FOR SELECT USING (is_available = true);


-- ─── 3. TRIGGERS (UPDATED_AT) ─────────────────────────────────────────────

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_accounts_modtime
  BEFORE UPDATE ON public.accounts
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_credit_applications_modtime
  BEFORE UPDATE ON public.credit_applications
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
  
-- ─── 4. SEED DATA FOR CATALOG ──────────────────────────────────────────────

INSERT INTO public.investment_products (name, ticker, category, risk_level, annual_return, minimum_amount, description)
VALUES 
  ('CETES 28 días', 'CETES28', 'cetes', 'low', 11.25, 100.00, 'Certificados de la Tesorería de la Federación a 28 días.'),
  ('Pagaré Bancario', 'PAGARE', 'bond', 'low', 9.50, 5000.00, 'Pagaré bancario a tasa fija con rendimientos garantizados.'),
  ('Fondo S&P 500 MX', 'SP500', 'etf', 'medium', 14.50, 1000.00, 'Fondo referenciado al indice S&P500.');
