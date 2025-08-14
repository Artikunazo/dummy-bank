import { Component, inject, signal } from '@angular/core';
import { Navbar } from "../../common/navbar/navbar";
import { Card } from '../../common/card/card';
import { DialogModule } from "primeng/dialog";
import { Router } from '@angular/router';
import { ProductService } from '../../services/product';
import { ICreditCard } from '../../models/products';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-credit-card',
  imports: [Navbar, Card, DialogModule, ButtonModule],
  templateUrl: './credit-card.html',
  styleUrl: './credit-card.css'
})
export class CreditCard {
	private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

	creditCards = this.productService.creditCards;
	displayDialog = false;
	selectedCreditCard = signal<ICreditCard>({} as ICreditCard);
	isLoading = signal(false);

	applyNow(creditCard: ICreditCard) {
		this.selectedCreditCard.set(creditCard);
		this.displayDialog = true;
	}

	closeDialog() {
		this.displayDialog = false;
	}

	confirmApply() {
    this.isLoading.set(true);

		setTimeout(() => {
      this.productService.signOn(this.selectedCreditCard());

			this.isLoading.set(false);
      this.closeDialog();
      this.router.navigate(['/dashboard']);
		}, 2000);
	}
}
