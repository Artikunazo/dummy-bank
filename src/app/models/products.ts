export interface IProduct {
  id: string; // Unique identifier for the product
  name: string;
  description: string;
  type: string;
  creditType?: string | null;
  balance?: number | null;
  card?: ICard | null;
  clabe?: string | null;
  accountNumber: number | null; // Optional, if applicable
}

export interface ICard {
  placeholder: string;
  number: string;
  expiry: string;
  cvv: string;
}

export enum CreditType {
  Auto = 'auto',
  Mortgage = 'mortgage',
  Card = 'card'
}

export enum BaseBalance {
  Auto = 100000,
  Mortgage = 10000000,
  Card = 10000
}
