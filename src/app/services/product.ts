import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly products = signal<IProduct[]>([
    {
      name: 'Car loan',
      description: 'Car loan description',
      type: 'credit'
    },
    {
      name: 'Mortgage credit',
      description: 'Mortgage credit description',
      type: 'credit'
    },
    {
      name: 'Card Credit',
      description: 'Car credit description',
      type: 'credit'
    },
    {
      name: 'Term investments',
      description: 'Term investments description',
      type: 'investment'
    },
  ]).asReadonly();
}
