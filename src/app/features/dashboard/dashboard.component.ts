import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../core/services/account.service';
import { CreditServicesService } from '../../core/services/credit-services.service';
import { InvestmentService } from '../../core/services/investment.service';
import { CurrencyMxnPipe } from '../../shared/pipes/currency-mxn.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public accountService = inject(AccountService);
  public creditService = inject(CreditServicesService);
  public investmentService = inject(InvestmentService);

  ngOnInit() {
    this.accountService.load();
    this.creditService.loadApplications();
    this.investmentService.loadPortfolio();
  }

  get mainBalance() {
    return this.accountService.mainBalance();
  }

  get activeCredits() {
    return this.creditService.applications().filter(a => a.status === 'active');
  }

  get activePortfolios() {
    return this.investmentService.portfolio();
  }
}
