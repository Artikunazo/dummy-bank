import { Component, computed, inject } from '@angular/core';
import { UserService } from '../../services/user';
import { CurrencyPipe } from '@angular/common';
import { Card } from '../../common/card/card';

@Component({
  selector: 'app-my-bank',
  standalone: true,
  imports: [CurrencyPipe, Card],
  template: `
    <section class="p-3 mb-8 @container">
      <p>Your bank products:</p>
      <div class="flex flex-row @max-lg:flex-col @max-lg:gap-6 @max-lg:w-100">
        @for (item of userProducts(); track item.id) {
          <app-card class="w-100">
            <h3 class="text-lg flex justify-between">{{item.name}} <span class="text-right">{{item.balance ?? 0 | currency}}</span></h3>
            <hr class="text-gray-300" />
            <div class="card-footer flex justify-between gap-4">
              @if(item.card){
                <button class="btn btn-primary mt-2" title="View card details"><svg class="w-6 h-6 card-icon"><use href="/assets/credit-card.svg"/></svg></button>
              }
              <button class="btn btn-primary mt-2" title="Deposit funds"><svg class="w-6 h-6 card-icon"><use href="/assets/deposit-founds.svg"/></svg></button>
              <button class="btn btn-primary mt-2" title="Withdraw funds"><svg class="w-6 h-6 card-icon"><use href="/assets/withdraw-founds.svg"/></svg></button>
              @if(item.card && !item.card.isLocked) {
                <button class="btn btn-primary mt-2" title="Unlock card"><svg class="w-6 h-6 card-icon"><use href="/assets/unlock.svg"/></svg></button>
              } @else {
                <button class="btn btn-primary mt-2" title="Lock card"><svg class="w-6 h-6 card-icon"><use href="/assets/lock.svg"/></svg></button>
              }
            </div>
          </app-card>
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
