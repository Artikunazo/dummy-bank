import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestmentService } from '../../core/services/investment.service';
import { InvestmentProduct } from '../../core/models';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { minAmount } from '../../shared/validators/financial.validators';

@Component({
  selector: 'app-investment-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './investment-detail.component.html'
})
export class InvestmentDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private investmentService = inject(InvestmentService);
  private fb = inject(FormBuilder);

  public product = signal<InvestmentProduct | null>(null);
  public showModal = signal(false);
  public step = signal(1);
  public isProcessing = signal(false);
  public errorMessage = signal('');

  public investForm = this.fb.group({
    amount: [null as number | null, [Validators.required]],
    terms: [false, [Validators.requiredTrue]]
  });

  async ngOnInit() {
    // Si products está vacío, forzamos carga
    if (this.investmentService.products().length === 0) {
      await this.investmentService.loadProducts();
    }
    
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');
      const p = this.investmentService.products().find(x => x.category === type);
      if (p) {
        this.product.set(p);
        this.investForm.get('amount')?.setValidators([Validators.required, minAmount(p.minimumAmount)]);
        this.investForm.get('amount')?.updateValueAndValidity();
      } else {
        this.goBack();
      }
    });
  }

  goBack() {
    this.router.navigate(['/investments']);
  }

  openContractModal() {
    this.showModal.set(true);
    this.step.set(1);
    this.investForm.reset({ terms: false });
    this.errorMessage.set('');
  }

  closeModal() {
    if (!this.isProcessing()) {
      this.showModal.set(false);
    }
  }

  canGoNext(): boolean {
    if (this.step() === 1) return this.investForm.get('amount')?.valid ?? false;
    if (this.step() === 2) return this.investForm.get('terms')?.valid ?? false;
    return true;
  }

  nextStep() {
    if (this.canGoNext()) {
      this.step.update(s => s + 1);
    } else {
      this.investForm.markAllAsTouched();
    }
  }

  prevStep() {
    this.step.update(s => s - 1);
  }

  async submit() {
    const p = this.product();
    if (!p || this.investForm.invalid) return;
    
    this.isProcessing.set(true);
    this.errorMessage.set('');
    
    const amount = Number(this.investForm.value.amount);
    const result = await this.investmentService.invest(p.id, amount);
    
    this.isProcessing.set(false);
    
    if (result.success) {
      this.closeModal();
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage.set(result.error ?? 'Hubo un error al procesar tu solicitud.');
    }
  }
}
