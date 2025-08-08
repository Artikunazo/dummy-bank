import { inject, Injectable, signal } from '@angular/core';
import { BaseBalance, CreditType, IProduct } from '../models/products';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from './user';

@Injectable({
  providedIn: 'root'
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
      accountNumber: null
    },
    {
      id: uuidv4(),
      accountNumber: null,
      name: 'Mortgage credit',
      description: 'Mortgage credit description',
      type: 'credit',
      creditType: CreditType.Mortgage,
    },
    {
      id: uuidv4(),
      name: 'Card Credit',
      description: 'Car credit description',
      type: 'credit',
      accountNumber: null,
      creditType: CreditType.Card,
    },
  ]);


  signOn(product: IProduct) {
    const user = this.userService.userState;

    product.balance = this.getProductBalance(product);

    const updatedProducts = [...user().products, product];

    this.userService.userState.update((currentUser) => ({
      ...currentUser,
      products: updatedProducts
    }));

    this.products.update((currentProducts) => [...currentProducts.filter((currentProduct) => currentProduct.id !== product.id)]);
  }

  getProductBalance(product: IProduct): number {
    if (product.type !== 'credit') return 0;

    switch (product.creditType) {
      case CreditType.Auto:
        return this.getRandomLoan(BaseBalance.Auto);
      case CreditType.Mortgage:
        return this.getRandomLoan(BaseBalance.Mortgage);
      case CreditType.Card:
        return this.getRandomLoan(BaseBalance.Card);
      default:
        return 0;
    }
  }

  getRandomLoan(length: number) {
    return parseFloat((Math.random() * length).toFixed(2));
  }
}
