import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../services/user';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-my-bank',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <section class="p-3 mb-8">
        <p>Your bank products:</p>
        <div class="flex">
          @for (item of userProducts(); track item.id) {
            <div class="product-item">
              <h3 class="text-lg flex justify-between">{{item.name}} <span class="text-right">{{item.balance ?? 0 | currency}}</span></h3>
              @if (item.card) {
                <div class="card-details mt-4">
                  <p>Card Number: {{item.card.number}}</p>
                  <p>Expiration date: {{item.card.expiry}}</p>
                  <p>CVV: {{item.card.cvv}}</p> 
                  <!-- @ToDo: toggle cvv. Nice to have: generate cvv dynamically -->
                </div>
              }
            </div>
          }
        </div>
    </section>
  `,
  styleUrl: './my-bank.css'
})
export class MyBank {
  private readonly userService = inject(UserService);
  protected readonly userData = this.userService.userState;

  userProducts = computed(() => this.userData().products);
}
