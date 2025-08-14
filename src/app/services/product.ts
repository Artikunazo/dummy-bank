import {inject, Injectable} from '@angular/core';
import {
	BaseBalance,
	CreditProducts,
	ProductType,
} from '../models/products';
import {UserService} from './user';
import {ProductDataService} from './product-data';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private readonly userService = inject(UserService);
	private readonly productData = inject(ProductDataService);

	private readonly mortgageCredits = this.productData.mortgageCredits;
	private readonly carLoans = this.productData.carLoans;
	private readonly creditCards = this.productData.creditCards;

	signOn(product: CreditProducts) {
		if (product.rate <= 0) return;

		const user = this.userService.userState;

		product.loanAmount = this.getProductBalance(product) * (product.rate / 100);
		const updatedProducts = [...user().products, product];
		this.userService.userState.update((currentUser) => ({
			...currentUser,
			products: updatedProducts,
		}));

    product.accountNumber = this.generateAccountNumber();

		if (product.productType === ProductType.Mortgage) {
			const monthlyPayment = product.loanAmount / (product.term * 12);
			product.monthlyPayment = monthlyPayment;

      this.mortgageCredits.update((currentMortgages) => [
			...currentMortgages.filter(
				(currentMortgage) => currentMortgage.id !== product.id,
			),
		]);
		}

		if (product.productType === ProductType.CreditCard) {
			const monthlyPayment = product.loanAmount / (product.term * 12);
			product.monthlyPayment = monthlyPayment;

      this.creditCards.update((currentCards) => [
			...currentCards.filter(
				(currentCard) => currentCard.id !== product.id,
			),
		]);
		}

		if (product.productType === ProductType.CarLoan) {
			const monthlyPayment = product.loanAmount / (product.term * 12);
			product.monthlyPayment = monthlyPayment;

			this.carLoans.update((currentLoans) => [
				...currentLoans.filter(
					(currentLoan) => currentLoan.id !== product.id,
				),
			]);
		}
	}

	getProductBalance(product: CreditProducts): number {
		if (product.type !== 'credit') return 0;

		switch (product.creditType) {
			case ProductType.CarLoan:
				return this.calculateLoan(BaseBalance.Auto.min, BaseBalance.Auto.max);
			case ProductType.Mortgage:
				return this.calculateLoan(
					BaseBalance.Mortgage.min,
					BaseBalance.Mortgage.max,
				);
			case ProductType.CreditCard:
				return this.calculateLoan(BaseBalance.Card.min, BaseBalance.Card.max);
			default:
				return 0;
		}
	}

	calculateLoan(min: number, max: number) {
		return parseFloat((Math.random() * (max - min) + min).toFixed(2));
	}

	generateAccountNumber(): string {
		const randomNumber = Math.floor(Math.random() * 1000000);
		return `${randomNumber}`;
	}
}
