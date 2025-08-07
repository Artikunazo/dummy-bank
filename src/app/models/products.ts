export interface IProduct {
  id: string; // Unique identifier for the product
  name: string;
  description: string;
  type: string;
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
