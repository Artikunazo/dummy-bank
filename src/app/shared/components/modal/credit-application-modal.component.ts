import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditServicesService } from '../../../core/services/credit-services.service';

export type CreditProductType = 'tdc' | 'mortgage' | 'auto' | 'personal_loan';

@Component({
  selector: 'app-credit-application-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './credit-application-modal.component.html'
})
export class CreditApplicationModalComponent implements OnInit {
  @Input({ required: true }) productType!: CreditProductType;
  @Output() close = new EventEmitter<void>();

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private creditService = inject(CreditServicesService);

  public step = signal(1);
  public isProcessing = signal(false);

  // Unificamos el control del valor principal (ingreso, valor casa, monto auto, monto personal)
  public creditForm = this.fb.group({
    mainValue: [null as number | null, [Validators.required]]
  });

  public get config() {
    switch (this.productType) {
      case 'tdc': 
        return { 
          title: 'Solicitud de Tarjeta de Crédito', 
          question: '¿Cuál es tu ingreso mensual neto?', 
          placeholder: '15000', 
          termMonths: 12, 
          interestRate: 25.4,
          min: 5000,
          approvedText: 'Límite de crédito aprobado:'
        };
      case 'mortgage':
        return { 
          title: 'Solicitud de Crédito Hipotecario', 
          question: '¿Cuál es el valor estimado de la propiedad?', 
          placeholder: '1500000', 
          termMonths: 240, 
          interestRate: 9.5,
          min: 500000,
          approvedText: 'Préstamo hipotecario pre-aprobado a 20 años:'
        };
      case 'auto':
        return { 
          title: 'Solicitud de Crédito Automotriz', 
          question: '¿Cuál es el valor del vehículo?', 
          placeholder: '350000', 
          termMonths: 60, 
          interestRate: 12.5,
          min: 100000,
          approvedText: 'Préstamo automotriz pre-aprobado a 60 meses:'
        };
      case 'personal_loan':
      default:
        return { 
          title: 'Solicitud de Préstamo Personal', 
          question: '¿Cuánto dinero necesitas?', 
          placeholder: '20000', 
          termMonths: 24, 
          interestRate: 16.0,
          min: 1000,
          approvedText: 'Monto aprobado a 24 meses:'
        };
    }
  }

  ngOnInit() {
    this.creditForm.controls.mainValue.setValidators([
      Validators.required, 
      Validators.min(this.config.min)
    ]);
    this.creditForm.controls.mainValue.updateValueAndValidity();
  }

  get calculatedAmount(): number {
    const val = this.creditForm.value.mainValue || 0;
    if (this.productType === 'tdc') return val * 2; // Simulated CL = 2x income
    if (this.productType === 'mortgage') return val * 0.9; // 90% LTV
    if (this.productType === 'auto') return val * 0.8; // 80% LTV
    return val; // Personal loan is 1:1
  }

  closeModal() {
    if (!this.isProcessing()) {
      this.close.emit();
    }
  }

  canGoNext(): boolean {
    if (this.step() === 1) return this.creditForm.controls.mainValue.valid;
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
    
    // Convert generic mainValue to specific metadata
    const metadataKey = this.productType === 'tdc' ? 'income' 
                      : this.productType === 'mortgage' ? 'propertyValue' 
                      : this.productType === 'auto' ? 'carValue' 
                      : 'amountRequested';
                      
    const metadata = { [metadataKey]: this.creditForm.value.mainValue };

    await this.creditService.contractService({
      type: this.productType,
      requestedAmount: this.calculatedAmount,
      termMonths: this.config.termMonths,
      interestRate: this.config.interestRate,
      metadata: metadata
    });
    
    this.isProcessing.set(false);
    this.closeModal();
    this.router.navigate(['/dashboard']);
  }
}
