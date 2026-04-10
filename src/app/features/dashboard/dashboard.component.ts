import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { AccountService } from '../../core/services/account.service';
import { CreditServicesService } from '../../core/services/credit-services.service';
import { InvestmentService } from '../../core/services/investment.service';
import { CurrencyMxnPipe } from '../../shared/pipes/currency-mxn.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyMxnPipe, CarouselModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public accountService = inject(AccountService);
  public creditService = inject(CreditServicesService);
  public investmentService = inject(InvestmentService);
  private router = inject(Router);

  public availableServices = [
    {
      title: 'Crédito Hipotecario',
      link: '/services/hipotecario',
      image: 'assets/mortgage_service_card_1775809195991.png'
    },
    {
      title: 'Crédito Automotriz',
      link: '/services/automotriz',
      image: 'assets/auto_loan_service_card_1775809208547.png'
    },
    {
      title: 'Préstamo Personal',
      link: '/services/prestamo-personal',
      image: 'assets/personal_loan_service_card_1775809223256.png'
    },
    {
      title: 'Tarjeta de Crédito',
      link: '/services/tdc',
      image: 'assets/credit_card_service_card_1775809237275.png'
    }
  ];

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

  goToInvestment(type: string) {
    this.router.navigate(['/investments', type]);
  }
}
