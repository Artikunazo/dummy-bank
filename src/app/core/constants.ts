/** Application-wide constants for DummyBank. */

export const APP_NAME = 'DummyBank';
export const APP_CURRENCY = 'MXN' as const;

/** Default transfer limit (MXN) for newly issued debit cards. */
export const DEFAULT_TRANSFER_LIMIT = 50_000;

/** Minimum deposit amount in MXN. */
export const MIN_DEPOSIT = 1;

/** Maximum single deposit amount in MXN. */
export const MAX_DEPOSIT = 1_000_000;

/** Maximum transfer amount in MXN (hard cap regardless of card limit). */
export const MAX_TRANSFER = 500_000;

/** Seconds between dynamic CVV rotations. */
export const CVV_ROTATION_SECONDS = 30;

/** Supabase table names. */
export const TABLE = {
  ACCOUNTS: 'accounts',
  DEBIT_CARDS: 'debit_cards',
  TRANSACTIONS: 'transactions',
  PROFILES: 'profiles',
  CREDIT_APPLICATIONS: 'credit_applications',
  INVESTMENT_PRODUCTS: 'investment_products',
  PORTFOLIOS: 'portfolios',
} as const;

/** Navigation route paths. */
export const ROUTES = {
  DASHBOARD: '/dashboard',
  CARDS: '/cards',
  INVESTMENTS: '/investments',
  SERVICES: '/services',
  PROFILE: '/profile',
} as const;
