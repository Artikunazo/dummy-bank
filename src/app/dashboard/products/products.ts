import {Component, inject} from '@angular/core';
import {ProductService} from '../../services/product';
import {IProduct} from '../../models/products';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-products',
	standalone: true,
	imports: [CarouselModule, ButtonModule],
	template: `
		<section class="products-container mt-[5rem]">
			<h4 class="mb-4 text-2xl">Available Products</h4>
			<p-carousel
				[value]="productsData()"
				[numVisible]="1"
				[numScroll]="1"
				[circular]="true"
				[autoplayInterval]="5000"
				class="w-full"
        [responsiveOptions]="[
          { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
          { breakpoint: '768px', numVisible: 1, numScroll: 1 },
          { breakpoint: '560px', numVisible: 1, numScroll: 1 }
        ]"
			>
				<ng-template let-product #item>
					<img
						#imgBanner
						[src]="product.banner.main"
						[alt]="product.name"
						(error)="imgBanner.src = product.banner.backup"
					/>
          <button pButton class="absolute bottom-70 right-50" size="large" (click)="signOn(product)">Sign On!</button>
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
