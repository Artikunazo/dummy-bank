import {Component, computed, inject} from '@angular/core';
import {UserService} from '../../services/user';
import {CurrencyPipe, NgTemplateOutlet} from '@angular/common';
import {Card} from '../../common/card/card';
import {ButtonCard} from '../../common/button-card/button-card';
import { ICard } from '../../models/products';

@Component({
	selector: 'app-my-bank',
	standalone: true,
	imports: [CurrencyPipe, Card, ButtonCard, NgTemplateOutlet],
	templateUrl: "./my-bank.html",
	styleUrl: './my-bank.css',
})
export class MyBank {
	private readonly userService = inject(UserService);
	protected readonly userData = this.userService.userState;

	userProducts = computed(() => this.userData().products);

  viewCardDetails(card: ICard) {
    console.log('Viewing card details for:', card.number);
  };
}
