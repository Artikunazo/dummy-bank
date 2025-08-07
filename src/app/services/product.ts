import { inject, Injectable, signal } from '@angular/core';
import { IProduct } from '../models/products';
import { v4 as uuidv4 } from 'uuid';
import { UserService } from './user';
import { filter } from 'rxjs';

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
      accountNumber: null
    },
    {
      id: uuidv4(),
      accountNumber: null,
      name: 'Mortgage credit',
      description: 'Mortgage credit description',
      type: 'credit'
    },
    {
      id: uuidv4(),
      name: 'Card Credit',
      description: 'Car credit description',
      type: 'credit',
      accountNumber: null,
    },
    {
      id: uuidv4(),
      name: 'Term investments',
      description: 'Term investments description',
      type: 'investment',
      accountNumber: null,
    },
  ])


  signOn(product: IProduct) {
    const user = this.userService.userState();

    // Logic to assign a random balance based on type of product
    product.balance = this.getRandomLoan(1000000);


    const updatedProducts = [...user.products, product];

    this.userService.userState.update((currentUser) => ({
      ...currentUser,
      products: updatedProducts
    }));

    this.products.update((currentProducts) => [...currentProducts.filter((currentProduct) => currentProduct.id !== product.id)]);
    
    // Optionally, you can navigate to a different page or show a success message
    console.log(`Signed on to product: ${product.name}`);
  }

  getRandomLoan(length: number) {
    return parseFloat((Math.random() * length).toFixed(2));
  }
}
