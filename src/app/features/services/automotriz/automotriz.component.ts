import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CreditServicesService } from '../../../core/services/credit-services.service';

@Component({
  selector: 'app-automotriz',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './automotriz.component.html'
})
export class AutomotrizComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private creditService = inject(CreditServicesService);

  public showModal = signal(false);
  public step = signal(1);
  public isProcessing = signal(false);

  public creditForm = this.fb.group({
    vehicleValue: [null as number | null, [Validators.required, Validators.min(100000)]]
  });

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  openContractModal() {
    this.showModal.set(true);
    this.step.set(1);
    this.creditForm.reset();
  }

  closeModal() {
    if (!this.isProcessing()) {
      this.showModal.set(false);
    }
  }

  canGoNext(): boolean {
    if (this.step() === 1) return this.creditForm.get('vehicleValue')?.valid ?? false;
    return true;
  }

  nextStep() {
    if (this.canGoNext()) this.step.update(s => s + 1);
  }

  prevStep() {
    this.step.update(s => s - 1);
  }

  async submit() {
    if (this.creditForm.invalid) return;
    this.isProcessing.set(true);
    
    await this.creditService.contractService({
      type: 'auto',
      requestedAmount: this.creditForm.value.vehicleValue! * 0.9,
      termMonths: 72,
      interestRate: 12.5,
      metadata: { vehicleValue: this.creditForm.value.vehicleValue }
    });
    
    this.isProcessing.set(false);
    this.closeModal();
    this.router.navigate(['/dashboard']);
  }
}
