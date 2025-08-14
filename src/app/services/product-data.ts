import {Injectable, signal} from '@angular/core';
import {
	ICarLoan,
	ICreditCard,
	IMortgageCredit,
	IProduct,
	ProductType,
} from '../models/products';
import {v4 as uuidv4} from 'uuid';

@Injectable({
	providedIn: 'root',
})
export class ProductDataService {
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
			name: 'Credit Card 1',
			description:
				"We designed the Dummy Bank Credit Card with you in mind. It's more than just a payment method—it's your partner to help you enjoy more, spend smarter, and have complete peace of mind that your money is secure.",
			type: 'credit',
			banner: {
				main: '/assets/products/credit-card.avif',
				backup: '/assets/products/credit-card.jpg',
			},
			creditType: 'creditCard',
			loanAmount: 0,
			cashback: 2,
			annualFee: 0,
			productType: ProductType.CreditCard,
			rate: 29.9,
			headline: 'Get your card today',
			term: 1,
			accountNumber: null,
			features: [
				'Start with a $1,000 credit line that has the potential to grow with you.',
				'A competitive 29.9% fixed annual interest rate. No surprises and no hidden clauses.',
				'For your peace of mind, the Average APR is 41.5% (excluding VAT). (For informational purposes. Calculated as of August 12, 2025).',
			],
			labelAction: 'Apply Now',
			monthlyPayment: 0,
		},
	]);

	mortgageCredits = signal<IMortgageCredit[]>([
		{
			id: uuidv4(),
			name: 'Mortgage Credit 1',
			description: `We believe in trust: That\'s why our terms are fair and easy to understand.
        We offer a highly competitive fixed annual interest rate, starting from 10.25%. You can apply for your loan to purchase a house or apartment with minimum financing from $500,000.
        For your complete transparency, the Average CAT (Total Annual Cost) is 12.8% excluding VAT.
        (For informational purposes. Calculation date: August 13, 2025).`,
			type: 'credit',
			banner: {
				main: '/assets/products/mortgage.avif',
				backup: '/assets/products/mortgage.jpg',
			},
			creditType: 'mortgage',
			loanAmount: 0,
			productType: ProductType.Mortgage,
			rate: 10.25,
			headline: 'The key to your new home is here',
			features: [
				'Fixed annual rates from 10.25%. Your monthly payment will never change.',
				'Up to 90% financing available.',
				'No prepayment penalties.',
				'30-years mortgage term',
			],
			labelAction: 'Pre-qualify Now',
			monthlyPayment: 0,
			term: 30,
			accountNumber: null,
		},
	]);

	carLoans = signal<ICarLoan[]>([
		{
			id: uuidv4(),
			name: 'Car Loan',
			description:
				"You've done the research to find the perfect car. Now, make the smart choice for financing it. The Dummy Bank Car Loan is built for savvy buyers who want competitive rates, flexible terms, and a partner they can trust. We provide a loan that works as hard as you do, ensuring your smart purchase is also a smart financial decision.",
			type: 'credit',
			banner: {
				main: '/assets/products/car-loan.avif',
				backup: '/assets/products/car-loan.jpg',
			},
			creditType: 'car',
			loanAmount: 0,
			productType: ProductType.CarLoan,
			rate: 13.9,
			headline: 'A better loan means a better bottom line.',
			term: 5,
			accountNumber: null,
			features: ['Finance your vehicle with loans from $100,000.', 'Secure a competitive 13.9% fixed annual interest rate.', 'To ensure you have all the facts, the Average CAT is 16.5% excluding VAT. (For informational purposes. Calculated as of August 14, 2025).'],
			labelAction: 'Apply Now',
      monthlyPayment: 0,
		},
	]);
}
