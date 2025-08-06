import { inject, Injectable, signal } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userState = signal<IUser>({
    username: '',
    password: '',
    products: []
  });
}
