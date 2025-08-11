import { Injectable, signal } from '@angular/core';
import { IUser } from '../models/user';

import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userState = signal<IUser>({
    username: '',
    password: '',
    products: [{
      id: uuidv4(),
      name: 'Payroll',
      description: 'Payroll account description',
      type: 'account',
      balance: parseFloat((Math.random() * 100000).toFixed(2)),
      clabe: "1234567789098765432",
      accountNumber: 1234567890,
      card: {
        placeholder: '',
        number: '1234 5678 9012 3456',
        expiry: '12/25',
        cvv: '123',
        isLocked: false
      }
    },
    {
      id: uuidv4(),
      name: 'Checking',
      description: 'Checking account description',
      type: 'account',
      balance: parseFloat((Math.random() * 10000).toFixed(2)),
      clabe: "098765432112345678",
      accountNumber: 1234567890,
      card: {
        placeholder: '',
        number: '2345 6789 0123 4567',
        expiry: '11/24',
        cvv: '456',
        isLocked: false
      }
    }]
  });
}
