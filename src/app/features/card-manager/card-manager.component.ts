import { Component, OnInit, OnDestroy, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccountService } from '../../core/services/account.service';
import { CreditServicesService } from '../../core/services/credit-services.service';
import { CurrencyMxnPipe } from '../../shared/pipes/currency-mxn.pipe';
import { generateCardNumber, generateDynamicCvv, cvvSecondsRemaining, formatCardNumber } from '../../core/utils/card.utils';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TransferModalComponent } from '../../shared/components/modal/transfer-modal.component';
import { DepositModalComponent } from '../../shared/components/modal/deposit-modal.component';
import { minAmount, maxAmount } from '../../shared/validators/financial.validators';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'primeng/tabs';

@Component({
  selector: 'app-card-manager',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CurrencyMxnPipe,
    ReactiveFormsModule,
    TransferModalComponent,
    DepositModalComponent,
    Tabs, TabList, Tab, TabPanels, TabPanel
  ],
  templateUrl: './card-manager.component.html',
  styleUrl: './card-manager.component.css',
})
export class CardManagerComponent implements OnInit, OnDestroy {
  protected accountService = inject(AccountService);
  protected creditService = inject(CreditServicesService);
  private fb = inject(FormBuilder);

  protected isFlipped = signal(false);
  protected isCreditFlipped = signal(false);
  protected cvv = signal('');
  protected cvvSecondsLeft = signal(30);
  protected showDepositModal = signal(false);
  protected showTransferModal = signal(false);
  protected isProcessing = signal(false);
  protected successMessage = signal('');
  protected errorMessage = signal('');
  protected activeTab = signal(0);

  private cvvInterval?: ReturnType<typeof setInterval>;

  protected limitForm = this.fb.group({
    limit: [null, [Validators.required, minAmount(1), maxAmount(500_000)]],
  });

  protected get card() { return this.accountService.debitCard(); }
  protected get balance() { return this.accountService.mainBalance(); }

  /** TDC activa del usuario */
  protected get tdcCard() {
    return this.creditService.applications().find(a => a.type === 'tdc' && a.status === 'active') ?? null;
  }

  protected get hasTdc() {
    return this.tdcCard !== null;
  }

  protected get tdcLimit(): number {
    return this.tdcCard?.requestedAmount ?? 0;
  }

  protected get tdcPaid(): number {
    const meta = this.tdcCard?.metadata as any;
    return meta?.paidAmount ?? 0;
  }

  protected get tdcAvailable(): number {
    return Math.max(0, this.tdcLimit - this.tdcPaid);
  }

  /** Número de la tarjeta débito generado de forma determinista */
  protected get cardNumber(): string {
    const id = this.card?.id ?? 'default-seed';
    return formatCardNumber(generateCardNumber(id));
  }

  /** Número de la tarjeta crédito generado distinto */
  protected get tdcCardNumber(): string {
    const id = (this.tdcCard?.id ?? 'tdc-seed') + '-credit';
    return formatCardNumber(generateCardNumber(id));
  }

  protected get expiry(): string {
    const c = this.card;
    if (!c) return 'MM/YY';
    return `${String(c.expiryMonth).padStart(2, '0')}/${String(c.expiryYear).slice(-2)}`;
  }

  protected get tdcExpiry(): string {
    // TDC expiry is 3 years from application creation
    if (!this.tdcCard) return 'MM/YY';
    const d = new Date(this.tdcCard.createdAt);
    d.setFullYear(d.getFullYear() + 3);
    return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getFullYear()).slice(-2)}`;
  }

  async ngOnInit(): Promise<void> {
    await this.accountService.load();
    await this.creditService.loadApplications();
    this.startCvvRotation();
  }

  ngOnDestroy(): void {
    if (this.cvvInterval) clearInterval(this.cvvInterval);
  }

  private startCvvRotation(): void {
    const refresh = () => {
      const id = this.card?.id ?? 'default';
      this.cvv.set(generateDynamicCvv(id));
      this.cvvSecondsLeft.set(cvvSecondsRemaining());
    };
    refresh();
    this.cvvInterval = setInterval(refresh, 1000);
  }

  protected flipCard(): void { this.isFlipped.update(v => !v); }
  protected flipCreditCard(): void { this.isCreditFlipped.update(v => !v); }

  protected openDeposit(): void {
    this.clearMessages();
    this.showDepositModal.set(true);
  }

  protected openTransfer(): void {
    this.clearMessages();
    this.showTransferModal.set(true);
  }

  protected async saveLimit(): Promise<void> {
    if (this.limitForm.invalid) return;
    const limit = Number(this.limitForm.value.limit);
    await this.accountService.updateTransferLimit(limit);
    this.successMessage.set('Límite actualizado.');
    setTimeout(() => this.clearMessages(), 2000);
  }

  private clearMessages(): void {
    this.successMessage.set('');
    this.errorMessage.set('');
  }
}
