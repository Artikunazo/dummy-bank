import { inject, Injectable, signal } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userState = signal<IUser>({
    username: '',
    password: '',
    products: [{
      name: 'Nomina',
      description: 'Nomina account description',
      type: 'account',
      balance: parseFloat((Math.random() * 100000).toFixed(2))
    },
    {
      name: 'Cheques',
      description: 'Cheques account description',
      type: 'account',
      balance: parseFloat((Math.random() * 10000).toFixed(2)),
    },]
  });
}
