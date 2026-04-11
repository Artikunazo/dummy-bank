import { Component, inject, output, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { minAmount } from '../../validators/financial.validators';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-deposit-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './deposit-modal.component.html'
})
export class DepositModalComponent {
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);

  visible = model<boolean>(false);
  
  protected isProcessing = false;
  protected successMessage = '';
  protected errorMessage = '';

  protected depositForm = this.fb.group({
    amount: [null, [Validators.required, minAmount(1)]],
  });

  close() {
    this.visible.set(false);
    this.depositForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }

  async submit() {
    if (this.depositForm.invalid) return;
    this.isProcessing = true;
    const amount = Number(this.depositForm.value.amount);
    
    const result = await this.accountService.deposit(amount);
    this.isProcessing = false;
    
    if (result.success) {
      this.successMessage = `Depósito de ${amount} MXN exitoso.`;
      this.depositForm.reset();
      setTimeout(() => this.close(), 1500);
    } else {
      this.errorMessage = result.error ?? 'Error al depositar.';
    }
  }
}
