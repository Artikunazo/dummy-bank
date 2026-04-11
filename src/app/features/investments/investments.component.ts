import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMxnPipe } from '../../shared/pipes/currency-mxn.pipe';
import { InvestmentService } from '../../core/services/investment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [CommonModule, CurrencyMxnPipe],
  templateUrl: './investments.component.html'
})
export class InvestmentsComponent implements OnInit {
  private investmentService = inject(InvestmentService);
  private router = inject(Router);

  products = this.investmentService.products;

  ngOnInit() {
    this.investmentService.loadProducts();
  }

  goToDetail(type: string) {
    this.router.navigate(['/investments', type]);
  }
}
