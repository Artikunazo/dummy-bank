import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CreditApplicationModalComponent } from '../../../shared/components/modal/credit-application-modal.component';

@Component({
  selector: 'app-tdc',
  standalone: true,
  imports: [CommonModule, CreditApplicationModalComponent],
  templateUrl: './tdc.component.html'
})
export class TdcComponent {
  private router = inject(Router);
  public showModal = signal(false);

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  openContractModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }
}
