import {inject, Injectable, signal} from '@angular/core';
import {
	ICarLoan,
	ICreditCard,
	IMortgageCredit,
	IProduct,
} from '../models/products';
import {v4 as uuidv4} from 'uuid';
import {UserService} from './user';

type productTypes = ICreditCard | ICarLoan | IMortgageCredit;

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private readonly userService = inject(UserService);

	// carLoans = signal<ICarLoan[]>([
	//   {
	//     id: uuidv4(),
	//     name: 'Car loan',
	//     description: 'Car loan description',
	//     type: 'credit',
	//     creditType: CreditType.Auto,
	//     accountNumber: null,
	//     banner: {
	//       main: '/assets/products/car-loan.avif',
	//       backup: '/assets/products/car-loan.jpg'
	//     },
	//     headline: '',
	//     rate: 0,
	//     balance: 0
	//   }
	// ]);

	// mortgageCredits = signal<IMortgageCredit[]>([]);
	// creditCards = signal<ICreditCard[]>([]);

	// products = signal<productTypes[]>([...this.carLoans(), ...this.mortgageCredits(), ...this.creditCards()]);

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

  // creditCards = signal<ICreditCard[]>([
  //   {
  //     id: uuidv4(),
  //     name: 'Card Credit',
  //     description: 'Car credit description',
  //     type: 'credit',
  //     banner: {
  //       main: '/assets/products/credit-card.avif',
  //       backup: '/assets/products/credit-card.jpg',
  //     },
  //     headline: 'Get your card today',
  //     rate: 0,
  //     creditType: CreditType.Card,
  //     cashback: 0,
  //     annualFee: 0,
  //   },
  // ]);

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
