import { Component, inject } from '@angular/core';
import { Products } from "../products/products";
import { MyBank } from "../my-bank/my-bank";
import { UserService } from '../../services/user';

@Component({
  selector: 'app-dashboard',
  imports: [Products, MyBank],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  private readonly userService = inject(UserService);
  readonly username = this.userService.userState().username;

}
