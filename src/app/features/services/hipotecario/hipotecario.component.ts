import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CreditServicesService } from '../../../core/services/credit-services.service';

@Component({
  selector: 'app-hipotecario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hipotecario.component.html'
})
export class HipotecarioComponent {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private creditService = inject(CreditServicesService);

  public showModal = signal(false);
  public step = signal(1);
  public isProcessing = signal(false);

  public creditForm = this.fb.group({
    propertyValue: [null as number | null, [Validators.required, Validators.min(500000)]]
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
    if (this.step() === 1) return this.creditForm.get('propertyValue')?.valid ?? false;
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
      type: 'mortgage',
      requestedAmount: this.creditForm.value.propertyValue! * 0.9,
      termMonths: 240,
      interestRate: 9.5,
      metadata: { propertyValue: this.creditForm.value.propertyValue }
    });
    
    this.isProcessing.set(false);
    this.closeModal();
    this.router.navigate(['/dashboard']);
  }
}
