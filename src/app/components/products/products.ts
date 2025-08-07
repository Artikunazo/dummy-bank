import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product';
import { IProduct } from '../../models/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  template: `
    <section class="products-container">
      @for (product of productsData; track product.id) {
        <div class="product">
          <h3>{{product.name}}</h3>
          <p>{{product.description}}</p>
          @if (product.accountNumber) {
            <p>Account Number: {{product.accountNumber}}</p>
          }

          <button (click)="signOn(product)">sign On!</button>
        </div>
      }
    </section>
  `,
  styleUrl: './products.scss'
})
export class Products {
  private readonly productService = inject(ProductService);
  protected readonly productsData = this.productService.products();


  signOn(product: IProduct) {
    this.productService.signOn(product);
  }
}
