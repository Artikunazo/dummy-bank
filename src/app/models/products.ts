import {min} from 'rxjs';

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
	isLocked?: boolean;
}

export enum CreditType {
	Auto = 'auto',
	Mortgage = 'mortgage',
	Card = 'card',
}

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
