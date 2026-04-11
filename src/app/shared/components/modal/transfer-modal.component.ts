import { Component, inject, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { minAmount } from '../../validators/financial.validators';
import { AccountService } from '../../../core/services/account.service';
import { CurrencyMxnPipe } from '../../pipes/currency-mxn.pipe';

@Component({
  selector: 'app-transfer-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyMxnPipe],
  templateUrl: './transfer-modal.component.html'
})
export class TransferModalComponent {
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);

  visible = model<boolean>(false);
  
  protected isProcessing = false;
  protected successMessage = '';
  protected errorMessage = '';

  protected get card() { return this.accountService.debitCard(); }

  protected transferForm = this.fb.group({
    recipient: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    amount: [null, [Validators.required, minAmount(1)]],
    description: [''],
  });

  close() {
    this.visible.set(false);
    this.transferForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }

  async submit() {
    if (this.transferForm.invalid) return;
    this.isProcessing = true;
    const amount = Number(this.transferForm.value.amount);
    
    if (this.card && amount > this.card.transferLimit) {
      this.errorMessage = `Excede el límite (${this.card.transferLimit} MXN).`;
      this.isProcessing = false;
      return;
    }

    const result = await this.accountService.deduct(
      amount,
      `Transferencia a ${this.transferForm.value.recipient}`,
      'transfer_out'
    );
    
    this.isProcessing = false;
    
    if (result.success) {
      this.successMessage = 'Transferencia exitosa.';
      this.transferForm.reset();
      setTimeout(() => this.close(), 1500);
    } else {
      this.errorMessage = result.error ?? 'Error en la transferencia.';
    }
  }
}
