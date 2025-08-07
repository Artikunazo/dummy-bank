import { Injectable, signal } from '@angular/core';
import { IProduct } from '../models/products';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly products = signal<IProduct[]>([
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
  ]).asReadonly();
}
