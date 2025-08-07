import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-my-bank',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <section>
      <div class="border-1">
        @for (item of userData.products; track item.id) {
          <div class="product-item">
            <h3>{{item.name}}</h3>
            <p>Type: {{item.type}}</p>
            <p>Balance: {{item.balance ?? 0 | currency}}</p>
            @if (item.card) {
              <div class="card-details">
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
  styleUrl: './my-bank.scss'
})
export class MyBank {
  private readonly userService = inject(UserService);
  protected readonly userData = this.userService.userState();

}
