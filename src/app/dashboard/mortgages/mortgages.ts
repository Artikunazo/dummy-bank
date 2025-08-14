import {Component, inject} from '@angular/core';
import {ProductService} from '../../services/product';
import {Card} from '../../common/card/card';
import { Navbar } from "../../common/navbar/navbar";
import { IMortgageCredit } from '../../models/products';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-mortgages',
	standalone: true,
	imports: [Card, Navbar, ButtonModule],
	template: `
		<section class="grid grid-cols-1">
      <app-navbar />
			@let banner = mortgageCredits()[0].banner;
			<img
				#imgBanner
				src="{{ banner?.main }}"
				alt="Mortgage Banner"
				(error)="imgBanner.src = banner?.backup ?? 'default'"
				class="rounded-lg aspect-[16/9]"
			/>

			<div class="content mt-6 p-6">
				<h3 class="font-bold text-3xl text-center">Our Mortgages</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					@for (mortgage of mortgageCredits(); track mortgage.id) {
						<app-card
							[header]="mortgage.name"
							[subheader]="'Rate ' + mortgage.rate + '%'"
						>
							<p>{{ mortgage.description }}</p>

							<button
								pButton
								type="button"
								label="{{ mortgage.labelAction }}"
								class="w-full"
                (click)="applyNow(mortgage)"
              ></button>
						</app-card>
					}
				</div>
			</div>
		</section>
	`,
	styleUrl: './mortgages.css',
})
export class Mortgages {
	private readonly productService = inject(ProductService);

	mortgageCredits = this.productService.mortgageCredits;

  applyNow(mortgage: IMortgageCredit) {
    // Logic to apply for the mortgage
  }
}
