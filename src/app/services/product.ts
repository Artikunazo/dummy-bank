import { computed, Injectable, signal } from '@angular/core';
import { IProduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly products = signal<IProduct[]>([
    {
      name: 'Car Credit',
      description: 'Car credit description',
      type: 'credit'
    },
    {
      name: 'House Credit',
      description: 'Car credit description',
      type: 'credit'
    },
    {
      name: 'Card Credit',
      description: 'Car credit description',
      type: 'credit'
    },
    {
      name: 'Savings',
      description: 'Savings description',
      type: 'invsetment'
    },
    {
      name: 'Inversion a plazo',
      description: 'Car credit description',
      type: 'investment'
    },
    {
      name: 'Nomina',
      description: 'Car credit description',
      type: 'account',
    },
    {
      name: 'Cheques',
      description: 'Car credit description',
      type: 'account',
    },
  ]).asReadonly();
}
