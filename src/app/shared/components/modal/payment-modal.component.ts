import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreditApplication } from '../../../core/models';
import { CurrencyMxnPipe } from '../../pipes/currency-mxn.pipe';
import { CreditServicesService } from '../../../core/services/credit-services.service';
import { AccountService } from '../../../core/services/account.service';
import { minAmount, maxAmount } from '../../validators/financial.validators';

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyMxnPipe],
  template: `
    @if (visible) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div class="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-md p-6 shadow-2xl animate-fade-in-up">
          
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-white flex items-center gap-2">
               <i class="pi pi-wallet text-emerald-400"></i> Abonar a Crédito
            </h2>
            <button (click)="close()" class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <i class="pi pi-times"></i>
            </button>
          </div>

          <!-- Información del Crédito -->
          <div class="mb-6 p-4 rounded-xl bg-slate-800 border border-slate-700">
             <div class="flex justify-between items-center mb-2">
                <span class="text-slate-400 text-sm">Crédito</span>
                <span class="text-white font-medium uppercase text-sm">{{ credit?.type }}</span>
             </div>
             <div class="flex justify-between items-center mb-2">
                <span class="text-slate-400 text-sm">Adeudo Actual</span>
                <span class="text-white font-mono font-bold">{{ currentDebt | currencyMxn }}</span>
             </div>
             <div class="flex justify-between items-center">
                <span class="text-slate-400 text-sm">Saldo Cuenta Principal</span>
                <span class="text-emerald-400 font-mono text-sm">{{ accountBalance | currencyMxn }}</span>
             </div>
          </div>

          <form [formGroup]="paymentForm" (ngSubmit)="submit()">
            <div class="space-y-4">
              <div>
                <label class="block text-slate-400 text-sm font-medium mb-1 flex justify-between">
                   Monto a abonar
                   <button type="button" (click)="setFullDebtPayment()" class="text-xs text-emerald-400 hover:text-emerald-300">
                      Liquidar total
                   </button>
                </label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">$</span>
                  <input type="number" formControlName="amount" 
                         class="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-xl" 
                         placeholder="0.00" />
                </div>
                <!-- Validation messages -->
                @if (paymentForm.get('amount')?.touched && paymentForm.get('amount')?.invalid) {
                   <div class="mt-2 text-crimson-400 text-xs">
                     @if (paymentForm.get('amount')?.errors?.['required']) {
                        El monto es requerido.
                     }
                     @if (paymentForm.get('amount')?.errors?.['min']) {
                        El monto mínimo es $1.
                     }
                     @if (paymentForm.get('amount')?.errors?.['max']) {
                        El monto excede el adeudo máximo.
                     }
                   </div>
                }
                
                <!-- Dynamic Debt Calculation Preview -->
                @if (paymentForm.get('amount')?.valid && paymentForm.get('amount')?.value) {
                   <div class="mt-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex justify-between items-center animate-fade-in">
                      <span class="text-slate-300 text-sm">Adeudo Restante Estimado:</span>
                      <span class="text-emerald-400 font-mono font-bold">{{ remainingDebtPreview | currencyMxn }}</span>
                   </div>
                }
              </div>

              @if (errorMessage()) {
                <div class="p-3 rounded-lg bg-crimson-500/10 border border-crimson-500/20 text-crimson-400 text-sm">
                  <i class="pi pi-exclamation-circle mr-1"></i> {{ errorMessage() }}
                </div>
              }
              
              @if (successMessage()) {
                <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  <i class="pi pi-check mr-1"></i> {{ successMessage() }}
                </div>
              }

              <button type="submit" [disabled]="paymentForm.invalid || isProcessing()" 
                      class="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                @if (isProcessing()) {
                  <i class="pi pi-spinner animate-spin"></i> Procesando...
                } @else {
                  Confirmar Abono
                }
              </button>
            </div>
          </form>

        </div>
      </div>
    }
  `
})
export class PaymentModalComponent {
  @Input() visible = false;
  @Input() credit: CreditApplication | null = null;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() paymentComplete = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private creditService = inject(CreditServicesService);
  private accountService = inject(AccountService);

  public isProcessing = signal(false);
  public errorMessage = signal('');
  public successMessage = signal('');

  get currentDebt(): number {
    if (!this.credit) return 0;
    const paid = (this.credit.metadata as any)?.paidAmount || 0;
    return Math.max(0, this.credit.requestedAmount - paid);
  }

  get accountBalance(): number {
    return this.accountService.mainBalance();
  }
  
  get remainingDebtPreview(): number {
    const payment = Number(this.paymentForm.get('amount')?.value || 0);
    return Math.max(0, this.currentDebt - payment);
  }

  public paymentForm = this.fb.group({
    amount: [null as number | null, [Validators.required, minAmount(1), maxAmount(10000000)]]
  });

  // Re-evaluate maxAmount based on currentDebt
  ngOnChanges() {
    if (this.credit && this.visible) {
      this.paymentForm.get('amount')?.setValidators([
         Validators.required, 
         minAmount(1), 
         maxAmount(this.currentDebt)
      ]);
      this.paymentForm.reset();
      this.errorMessage.set('');
      this.successMessage.set('');
    }
  }

  setFullDebtPayment() {
    this.paymentForm.patchValue({ amount: this.currentDebt });
    this.paymentForm.get('amount')?.markAsTouched();
  }

  close() {
    if (this.isProcessing()) return;
    this.visible = false;
    this.paymentForm.reset();
    this.errorMessage.set('');
    this.successMessage.set('');
    this.visibleChange.emit(this.visible);
  }

  async submit() {
    if (this.paymentForm.invalid || !this.credit) return;
    
    // Ensure sufficient funds
    const amount = Number(this.paymentForm.value.amount);
    if (amount > this.accountBalance) {
       this.errorMessage.set('Fondos insuficientes en la cuenta principal.');
       return;
    }

    this.isProcessing.set(true);
    this.errorMessage.set('');

    const result = await this.creditService.registerPayment(this.credit.id, amount);

    if (result.success) {
      this.successMessage.set('Abono registrado con éxito.');
      setTimeout(() => {
        this.isProcessing.set(false);
        this.paymentComplete.emit();
        this.close();
      }, 1500);
    } else {
      this.errorMessage.set(result.error || 'Hubo un error al registrar el abono.');
      this.isProcessing.set(false);
    }
  }
}
