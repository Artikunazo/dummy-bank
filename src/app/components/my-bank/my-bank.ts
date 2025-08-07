import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-my-bank',
  imports: [CurrencyPipe],
  templateUrl: './my-bank.html',
  styleUrl: './my-bank.scss'
})
export class MyBank {
  private readonly userService = inject(UserService);
  protected readonly userData = this.userService.userState();

}
