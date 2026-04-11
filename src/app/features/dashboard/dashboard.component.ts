import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { AccountService } from '../../core/services/account.service';
import { CreditServicesService } from '../../core/services/credit-services.service';
import { InvestmentService } from '../../core/services/investment.service';
import { CurrencyMxnPipe } from '../../shared/pipes/currency-mxn.pipe';
import { TransferModalComponent } from '../../shared/components/modal/transfer-modal.component';
import { PaymentModalComponent } from '../../shared/components/modal/payment-modal.component';
import { AmortizationModalComponent } from '../../shared/components/modal/amortization-modal.component';
import { CreditApplication } from '../../core/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyMxnPipe, CarouselModule, TransferModalComponent, PaymentModalComponent, AmortizationModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public accountService = inject(AccountService);
  public creditService = inject(CreditServicesService);
  public investmentService = inject(InvestmentService);
  private router = inject(Router);

  public showTransferModal = signal(false);
  public showPaymentModal = signal(false);
  public showAmortizationModal = signal(false);
  public selectedCredit = signal<CreditApplication | null>(null);

  private rawServices = [
    {
      title: 'Crédito Hipotecario',
      link: '/services/hipotecario',
      image: 'assets/mortgage_service_card_1775809195991.png',
      type: 'mortgage'
    },
    {
      title: 'Crédito Automotriz',
      link: '/services/automotriz',
      image: 'assets/auto_loan_service_card_1775809208547.png',
      type: 'auto'
    },
    {
      title: 'Préstamo Personal',
      link: '/services/prestamo-personal',
      image: 'assets/personal_loan_service_card_1775809223256.png',
      type: 'personal_loan'
    },
    {
      title: 'Tarjeta de Crédito',
      link: '/services/tdc',
      image: 'assets/credit_card_service_card_1775809237275.png',
      type: 'tdc'
    }
  ];

  public get availableServices() {
    const activeTypes = this.activeCredits.map(c => c.type);
    return this.rawServices.filter(s => !activeTypes.includes(s.type as any));
  }

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

  openPaymentModal(credit: CreditApplication) {
    this.selectedCredit.set(credit);
    this.showPaymentModal.set(true);
  }

  openAmortizationModal(credit: CreditApplication) {
    this.selectedCredit.set(credit);
    this.showAmortizationModal.set(true);
  }

  getRemainingDebt(credit: CreditApplication): number {
    const paid = (credit.metadata as any)?.paidAmount || 0;
    return Math.max(0, credit.requestedAmount - paid);
  }
}
