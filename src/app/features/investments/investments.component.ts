import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMxnPipe } from '../../shared/pipes/currency-mxn.pipe';
import { InvestmentService } from '../../core/services/investment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [CommonModule, CurrencyMxnPipe],
  template: `
    <div class="animate-fade-in p-4 md:p-6 space-y-6">
      <div class="mb-4">
        <h1 class="text-2xl font-bold text-white">Mercado de Inversiones</h1>
        <p class="text-slate-400 text-sm mt-1">Haz que tu dinero trabaje para ti</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (product of products(); track product.id) {
          <div class="glass p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-colors cursor-pointer group flex flex-col" (click)="goToDetail(product.category)">
            <div class="flex justify-between items-start mb-4">
              <div class="p-3 bg-slate-800 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform">
                <i class="pi pi-chart-line text-xl"></i>
              </div>
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full" 
                    [ngClass]="{
                      'bg-emerald-500/10 text-emerald-400': product.riskLevel === 'low',
                      'bg-amber-500/10 text-amber-400': product.riskLevel === 'medium',
                      'bg-red-500/10 text-red-400': product.riskLevel === 'high'
                    }">
                Riesgo {{ product.riskLevel === 'low' ? 'Bajo' : product.riskLevel === 'medium' ? 'Medio' : 'Alto' }}
              </span>
            </div>
            
            <h3 class="text-lg font-bold text-white mb-2">{{ product.name }}</h3>
            <p class="text-slate-400 text-sm flex-1">{{ product.description }}</p>
            
            <div class="mt-6 pt-4 border-t border-slate-700/50 grid grid-cols-2 gap-4">
              <div>
                <p class="text-slate-500 text-xs mb-1">Rendimiento anual</p>
                <p class="text-emerald-400 font-bold">{{ product.annualReturn }}%</p>
              </div>
              <div>
                <p class="text-slate-500 text-xs mb-1">Inversión mínima</p>
                <p class="text-white font-medium">{{ product.minimumAmount | currencyMxn }}</p>
              </div>
            </div>
          </div>
        } @empty {
          <div class="col-span-full py-12 text-center text-slate-500">
            Cargando opciones de inversión...
          </div>
        }
      </div>
    </div>
  `
})
export class InvestmentsComponent implements OnInit {
  private investmentService = inject(InvestmentService);
  private router = inject(Router);

  products = this.investmentService.products;

  ngOnInit() {
    this.investmentService.loadProducts();
  }

  goToDetail(type: string) {
    this.router.navigate(['/investments', type]);
  }
}
