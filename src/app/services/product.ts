import {inject, Injectable, signal} from '@angular/core';
import {
	ICarLoan,
	ICreditCard,
	IMortgageCredit,
	IProduct,
	ProductType,
} from '../models/products';
import {v4 as uuidv4} from 'uuid';
import {UserService} from './user';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private readonly userService = inject(UserService);

	products = signal<IProduct[]>([
		{
			id: uuidv4(),
			name: 'Car loan',
			description: 'Car loan description',
			type: 'credit',
			banner: {
				main: '/assets/products/car-loan.avif',
				backup: '/assets/products/car-loan.jpg',
			},
			url: '/dashboard/car-loan',
		},
		{
			id: uuidv4(),
			name: 'Mortgage credit',
			description: 'Mortgage credit description',
			type: 'credit',
			banner: {
				main: '/assets/products/mortgage.avif',
				backup: '/assets/products/mortgage.jpg',
			},
			url: '/dashboard/mortgage',
		},
		{
			id: uuidv4(),
			name: 'Card Credit',
			description: 'Car credit description',
			type: 'credit',
			banner: {
				main: '/assets/products/credit-card.avif',
				backup: '/assets/products/credit-card.jpg',
			},
			url: '/dashboard/credit-card',
		},
	]);

	creditCards = signal<ICreditCard[]>([
		{
			id: uuidv4(),
			name: 'Card Credit',
			description: 'Car credit description',
			type: 'credit',
			banner: {
				main: '/assets/products/credit-card.avif',
				backup: '/assets/products/credit-card.jpg',
			},
			url: '',
			creditType: 'card',
			loanAmount: 0,
			cashback: 0,
			annualFee: 0,
			productType: ProductType.CreditCard,
			rate: 0,
			headline: 'Get your card today',
		},
	]);

	mortgageCredits = signal<IMortgageCredit[]>([
		{
			id: uuidv4(),
			name: 'Mortgage Credit',
			description:
				'We believe in trust: That\'s why our terms are fair and easy to understand. We offer a highly competitive fixed annual interest rate, starting from 10.25%. You can apply for your loan to purchase a house or apartment with minimum financing from $500,000. For your complete transparency, the Average CAT (Total Annual Cost) is 12.8% excluding VAT. (For informational purposes. Calculation date: August 13, 2025).',
			type: 'credit',
			banner: {
				main: '/assets/products/mortgage.avif',
				backup: '/assets/products/mortgage.jpg',
			},
			url: '/dashboard/mortgage',
			creditType: 'mortgage',
			loanAmount: 0,
			productType: ProductType.Mortgage,
			rate: 10.25,
			headline: 'The key to your new home is here',
			features: [
				'Fixed annual rates from 10.25%. Your monthly payment will never change.',
				'Up to 90% financing available.',
				'No prepayment penalties.',
			],
			labelAction: 'Pre-qualify Now',
		},
	]);

	carLoans = signal<ICarLoan[]>([
		{
			id: uuidv4(),
			name: 'Car Loan',
			description: 'Car loan description',
			type: 'credit',
			banner: {
				main: '/assets/products/car-loan.avif',
				backup: '/assets/products/car-loan.jpg',
			},
			url: '/dashboard/car-loan',
			creditType: 'car',
			loanAmount: 0,
			productType: ProductType.CarLoan,
			rate: 0,
			headline: 'Get your car loan today',
		},
	]);

	signOn(product: IProduct) {
		// console.log(product);
		// const user = this.userService.userState;
		// product.balance = this.getProductBalance(product);
		// const updatedProducts = [...user().products, product];
		// this.userService.userState.update((currentUser) => ({
		// 	...currentUser,
		// 	products: updatedProducts,
		// }));
		// this.products.update((currentProducts) => [
		// 	...currentProducts.filter(
		// 		(currentProduct) => currentProduct.id !== product.id,
		// 	),
		// ]);
	}

	// getProductBalance(product: IProduct): number {
	// 	if (product.type !== 'credit') return 0;

	// 	switch (product.creditType) {
	// 		case CreditType.Auto:
	// 			return this.calculateLoan(BaseBalance.Auto.min, BaseBalance.Auto.max);
	// 		case CreditType.Mortgage:
	// 			return this.calculateLoan(
	// 				BaseBalance.Mortgage.min,
	// 				BaseBalance.Mortgage.max,
	// 			);
	// 		case CreditType.Card:
	// 			return this.calculateLoan(BaseBalance.Card.min, BaseBalance.Card.max);
	// 		default:
	// 			return 0;
	// 	}
	// }

	// calculateLoan(min: number, max: number) {
	// 	return parseFloat((Math.random() * (max - min) + min).toFixed(2));
	// }
}
