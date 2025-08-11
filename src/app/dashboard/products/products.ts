import {Component, inject} from '@angular/core';
import {ProductService} from '../../services/product';
import {IProduct} from '../../models/products';
import { CarouselModule } from 'primeng/carousel';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [CarouselModule],
	template: `
		<section class="products-container mt-[5rem]">
      <h4 class="mb-4">Available Products</h4>
      <p-carousel [value]="productsData()" [numVisible]="1" [numScroll]="1" [circular]="false">
        <ng-template let-product #item>
          <div class="product">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
	          <button (click)="signOn(product)">sign On!</button>
          </div>
        </ng-template>
      </p-carousel>
		</section>
	`,
	styleUrl: './products.css',
})
export class Products {
	private readonly productService = inject(ProductService);
	protected readonly productsData = this.productService.products;

	signOn(product: IProduct) {
		this.productService.signOn(product);
	}
}
