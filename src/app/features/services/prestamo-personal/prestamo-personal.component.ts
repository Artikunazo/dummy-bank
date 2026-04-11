import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CreditApplicationModalComponent } from '../../../shared/components/modal/credit-application-modal.component';

@Component({
  selector: 'app-prestamo-personal',
  standalone: true,
  imports: [CommonModule, CreditApplicationModalComponent],
  templateUrl: './prestamo-personal.component.html'
})
export class PrestamoPersonalComponent {
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
