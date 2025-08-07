import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product';

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
          <p>Type: {{product.type}}</p>
          @if (product.accountNumber) {
            <p>Account Number: {{product.accountNumber}}</p>
          } @else {
            <p>No associated account number.</p>
          }
        </div>
      }
    </section>
  `,
  styleUrl: './products.scss'
})
export class Products {
  private readonly productService = inject(ProductService);
  protected readonly productsData = this.productService.products();

}
