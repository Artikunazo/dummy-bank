import { Component, OnInit, signal, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../core/services/account.service';
import { CurrencyMxnPipe } from '../../shared/pipes/currency-mxn.pipe';
import { generateCardNumber, generateDynamicCvv, cvvSecondsRemaining, formatCardNumber } from '../../core/utils/card.utils';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TransferModalComponent } from '../../shared/components/modal/transfer-modal.component';
import { DepositModalComponent } from '../../shared/components/modal/deposit-modal.component';
import { minAmount, maxAmount } from '../../shared/validators/financial.validators';

/**
 * Debit Card Manager page.
 *
 * Features:
 * - 3D-flipping bank card with masked number
 * - Dynamic CVV rotating every 30 seconds
 * - Deposit modal with reactive form
 * - Transfer modal with limit validation
 * - Configurable transfer limit
 */
@Component({
  selector: 'app-card-manager',
  standalone: true,
  imports: [CommonModule, CurrencyMxnPipe, ReactiveFormsModule, TransferModalComponent, DepositModalComponent],
  templateUrl: './card-manager.component.html',
  styleUrl: './card-manager.component.css',
})
export class CardManagerComponent implements OnInit {
  protected accountService = inject(AccountService);
  private fb = inject(FormBuilder);

  protected isFlipped = signal(false);
  protected cvv = signal('');
  protected cvvSecondsLeft = signal(30);
  protected showDepositModal = signal(false);
  protected showTransferModal = signal(false);
  protected isProcessing = signal(false);
  protected successMessage = signal('');
  protected errorMessage = signal('');

  private cvvInterval?: ReturnType<typeof setInterval>;

  protected depositForm = this.fb.group({
    amount: [null, [Validators.required, minAmount(1), maxAmount(1_000_000)]],
  });

  protected transferForm = this.fb.group({
    recipient: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    amount: [null, [Validators.required, minAmount(1)]],
    description: [''],
  });

  protected limitForm = this.fb.group({
    limit: [null, [Validators.required, minAmount(1), maxAmount(500_000)]],
  });

  protected get card() { return this.accountService.debitCard(); }
  protected get balance() { return this.accountService.mainBalance(); }

  protected get cardNumber(): string {
    const id = this.card?.id ?? 'default-seed';
    return formatCardNumber(generateCardNumber(id));
  }

  protected get expiry(): string {
    const c = this.card;
    if (!c) return 'MM/YY';
    return `${String(c.expiryMonth).padStart(2, '0')}/${String(c.expiryYear).slice(-2)}`;
  }

  async ngOnInit(): Promise<void> {
    await this.accountService.load();
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

  protected flipCard(): void {
    this.isFlipped.update((v) => !v);
  }

  protected openDeposit(): void {
    this.depositForm.reset();
    this.clearMessages();
    this.showDepositModal.set(true);
  }

  protected closeDeposit(): void { this.showDepositModal.set(false); }

  protected openTransfer(): void {
    this.transferForm.reset();
    this.clearMessages();
    this.showTransferModal.set(true);
  }

  protected closeTransfer(): void { this.showTransferModal.set(false); }

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
