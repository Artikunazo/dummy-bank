import {Component, inject, signal} from '@angular/core';
import {ProductService} from '../../services/product';
import {Card} from '../../common/card/card';
import {Navbar} from '../../common/navbar/navbar';
import {IMortgageCredit} from '../../models/products';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { Router } from '@angular/router';
import { ProductDataService } from '../../services/product-data';

@Component({
	selector: 'app-mortgages',
	standalone: true,
	imports: [Card, Navbar, ButtonModule, DialogModule],
	templateUrl: './mortgages.html',
	styleUrl: './mortgages.css',
})
export class Mortgages {
	private readonly productDataService = inject(ProductDataService);
	private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

	mortgageCredits = this.productDataService.mortgageCredits;
	displayDialog = false;
	selectedMortgage = signal<IMortgageCredit>({} as IMortgageCredit);
	isLoading = signal(false);

	applyNow(mortgage: IMortgageCredit) {
		this.selectedMortgage.set(mortgage);
		this.displayDialog = true;
	}

	closeDialog() {
		this.displayDialog = false;
	}

	confirmApply() {
    this.isLoading.set(true);

		setTimeout(() => {
      this.productService.signOn(this.selectedMortgage());

			this.isLoading.set(false);
      this.closeDialog();
      this.router.navigate(['/dashboard']);
		}, 2000);
	}
}
