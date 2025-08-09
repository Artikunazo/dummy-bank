import { Component, inject, OnInit } from '@angular/core';
import { Products } from "./products/products";
import { MyBank } from "./my-bank/my-bank";
import { UserService } from '../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Products, MyBank],
  template: `
    <section class="dashboard-container container">
      <h2>Welcome {{username}}! </h2>
      
      <app-my-bank />

      <app-products />
    </section>
  `,
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  private readonly userService = inject(UserService);

  readonly username = this.userService.userState().username;
}
