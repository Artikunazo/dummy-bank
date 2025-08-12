import {inject, Injectable, signal} from '@angular/core';
import {BaseBalance, CreditType, IProduct} from '../models/products';
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
			creditType: CreditType.Auto,
			accountNumber: null,
      banner: {
        main: '/assets/products/car-loan.avif',
        backup: '/assets/products/car-loan.jpg'
      }
		},
		{
			id: uuidv4(),
			accountNumber: null,
			name: 'Mortgage credit',
			description: 'Mortgage credit description',
			type: 'credit',
			creditType: CreditType.Mortgage,
      banner: {
        main: '/assets/products/mortgage.avif',
        backup: '/assets/products/mortgage.jpg'
      }
		},
		{
			id: uuidv4(),
			name: 'Card Credit',
			description: 'Car credit description',
			type: 'credit',
			accountNumber: null,
			creditType: CreditType.Card,
      banner: {
        main: '/assets/products/credit-card.avif',
        backup: '/assets/products/credit-card.jpg'
      }
		},
	]);

	signOn(product: IProduct) {
    // console.log(product);
		const user = this.userService.userState;

		product.balance = this.getProductBalance(product);

		const updatedProducts = [...user().products, product];

		this.userService.userState.update((currentUser) => ({
			...currentUser,
			products: updatedProducts,
		}));

		this.products.update((currentProducts) => [
			...currentProducts.filter(
				(currentProduct) => currentProduct.id !== product.id,
			),
		]);
	}

	getProductBalance(product: IProduct): number {
		if (product.type !== 'credit') return 0;

		switch (product.creditType) {
			case CreditType.Auto:
				return this.calculateLoan(BaseBalance.Auto.min, BaseBalance.Auto.max);
			case CreditType.Mortgage:
				return this.calculateLoan(
					BaseBalance.Mortgage.min,
					BaseBalance.Mortgage.max,
				);
			case CreditType.Card:
				return this.calculateLoan(BaseBalance.Card.min, BaseBalance.Card.max);
			default:
				return 0;
		}
	}

	calculateLoan(min: number, max: number) {
		return parseFloat((Math.random() * (max - min) + min).toFixed(2));
	}
}
