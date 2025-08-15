import {Component, inject, signal} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product';
import {ICarLoan} from '../../models/products';
import {Navbar} from '../../common/navbar/navbar';
import {Card} from '../../common/card/card';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {ProductDataService} from '../../services/product-data';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-car-loan',
	standalone: true,
	imports: [Navbar, Card, DialogModule, ButtonModule],
	templateUrl: './car-loan.html',
	styleUrl: './car-loan.css',
})
export class CarLoan {
	private readonly productService = inject(ProductService);
	private readonly productDataService = inject(ProductDataService);
	private readonly router = inject(Router);

  baseUrl = environment.baseAssetUrl;
	carLoans = this.productDataService.carLoans;
	displayDialog = false;
	selectedCarLoan = signal<ICarLoan>({} as ICarLoan);
	isLoading = signal(false);

	applyNow(carLoan: ICarLoan) {
		this.selectedCarLoan.set(carLoan);
		this.displayDialog = true;
	}

	closeDialog() {
		this.displayDialog = false;
	}

	confirmApply() {
		this.isLoading.set(true);

		setTimeout(() => {
			this.productService.signOn(this.selectedCarLoan());

			this.isLoading.set(false);
			this.closeDialog();
			this.router.navigate(['/dashboard']);
		}, 2000);
	}
}
