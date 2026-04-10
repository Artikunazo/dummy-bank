import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-fade-in p-4 md:p-6 text-white text-center">
       <h1>Inversión Detalle</h1>
       <p class="text-slate-400">Stepper de contratación de inversión próximamente...</p>
    </div>
  `
})
export class InvestmentDetailComponent {
}
