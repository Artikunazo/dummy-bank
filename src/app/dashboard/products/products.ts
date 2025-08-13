import {Component, inject, signal} from '@angular/core';
import {ProductService} from '../../services/product';
import {IProduct} from '../../models/products';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [CarouselModule, ButtonModule, DialogModule],
	templateUrl: './products.html',
	styleUrl: './products.css',
})
export class Products {
	private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

	protected readonly productsData = this.productService.products;
  protected productSelected = signal< | null>(null);
  displayDialog = false;

	viewDetails(product: IProduct) {
    console.log('Viewing details for:', product.name);
    this.router.navigate([product.url]);
	}

}
