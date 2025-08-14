export enum ProductType {
	CarLoan = 'carLoan',
	Mortgage = 'mortgage',
	CreditCard = 'creditCard',
	Checking = 'checking',
	Payroll = 'payroll',
}

export interface IProduct {
	id: string;
	name: string;
	description: string | string[];
	type: string;
	banner?: {
    main: string;
		backup: string;
	};
  url?: string;
  features?: string[];
  labelAction?: string;
}

export interface ICard {
	placeholder: string;
	number: string;
	expiry: string;
	cvv: string;
	isLocked?: boolean;
}

export interface ICredit extends IProduct {
	headline: string;
	rate: number;
	loanAmount?: number;
  term: number;
  accountNumber: string | null;
}

export interface ICreditCard extends ICredit {
	cashback: number;
	annualFee: number;
	card?: ICard;
	productType: ProductType.CreditCard;
  monthlyPayment: number;
}

export interface IDebit extends IProduct {
	balance: number;
	card: ICard | null;
	accountNumber: string;
	clabe: string;
}

export interface ICarLoan extends ICredit {
	productType: ProductType.CarLoan;
  monthlyPayment: number;
}
export interface IMortgageCredit extends ICredit {
	productType: ProductType.Mortgage;
  monthlyPayment: number;
}

export interface IPayroll extends IDebit {
	productType: ProductType.Payroll;
}

export interface IChecking extends IDebit {
	productType: ProductType.Checking;
}

export type CreditProducts = IMortgageCredit | ICarLoan | ICreditCard;

export const BaseBalance = {
	Auto: {
		min: 10000,
		max: 100000,
	},
	Mortgage: {
		min: 100000,
		max: 10000000,
	},
	Card: {
		min: 1000,
		max: 10000,
	},
};
