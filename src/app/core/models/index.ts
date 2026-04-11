// ─── Account & Card ────────────────────────────────────────────────────────

export interface Account {
  id: string;
  userId: string;
  balance: number;
  currency: 'MXN';
  createdAt: string;
  updatedAt: string;
}

export interface DebitCard {
  id: string;
  accountId: string;
  lastFour: string;
  expiryMonth: number;
  expiryYear: number;
  isActive: boolean;
  transferLimit: number;
  createdAt: string;
}

export type TransactionType =
  | 'deposit'
  | 'transfer_out'
  | 'transfer_in'
  | 'payment'
  | 'fee'
  | 'investment_purchase'
  | 'investment_redemption'
  | 'loan_disbursement'
  | 'loan_payment';

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  type: TransactionType;
  description: string;
  balanceAfter: number;
  createdAt: string;
}

// ─── User / Profile ────────────────────────────────────────────────────────

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  avatarUrl?: string;
  theme?: 'light' | 'dark';
  createdAt: string;
}

// ─── Credit Services ───────────────────────────────────────────────────────

export type CreditServiceType = 'tdc' | 'mortgage' | 'auto' | 'personal_loan';
export type CreditServiceStatus = 'pending' | 'reviewing' | 'approved' | 'rejected' | 'active' | 'closed';

export interface CreditApplication {
  id: string;
  userId: string;
  type: CreditServiceType;
  status: CreditServiceStatus;
  requestedAmount: number;
  approvedAmount?: number;
  termMonths: number;
  interestRate: number;
  monthlyPayment?: number;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

// TDC (Tarjeta de Crédito)
export interface TdcApplication {
  creditLimit: number;
  cardNetwork: 'visa' | 'mastercard';
  annualFee: number;
}

// Mortgage
export interface MortgageApplication {
  propertyValue: number;
  downPayment: number;
  propertyAddress: string;
  propertyType: 'house' | 'apartment' | 'land';
}

// Auto Loan
export interface AutoApplication {
  vehicleValue: number;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: number;
  isNew: boolean;
}

// Personal Loan
export interface PersonalLoanApplication {
  purpose: string;
  employmentType: 'employed' | 'self_employed' | 'business_owner' | 'other';
  monthlyIncome: number;
}

// ─── Investments ───────────────────────────────────────────────────────────

export type InvestmentCategory = 'cetes' | 'etf' | 'mutual_fund' | 'bond' | 'stock';
export type RiskLevel = 'low' | 'medium' | 'high';

export interface InvestmentProduct {
  id: string;
  name: string;
  ticker: string;
  category: InvestmentCategory;
  riskLevel: RiskLevel;
  annualReturn: number;      // percentage, e.g. 11.25
  minimumAmount: number;
  currency: 'MXN';
  description: string;
  managementFee: number;     // percentage
  isAvailable: boolean;
}

export interface Portfolio {
  id: string;
  userId: string;
  productId: string;
  product?: InvestmentProduct;
  shares: number;
  purchasePrice: number;
  currentValue: number;
  purchasedAt: string;
}

// ─── ServiceResult ─────────────────────────────────────────────────────────

export interface ServiceResult<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}
