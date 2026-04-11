import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { CreditServicesService } from '../../core/services/credit-services.service';
import { InvestmentService } from '../../core/services/investment.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animate-fade-in p-4 md:p-6 space-y-6">
      <h1 class="text-2xl font-bold text-white">Mi Perfil</h1>
      @if (profile()) {
        <div class="glass max-w-md p-6 rounded-2xl border border-slate-700/50 flex flex-col items-center">
          <img [src]="profile()?.avatarUrl" alt="Avatar" class="w-32 h-32 rounded-full border-4 border-slate-800 shadow-xl mb-4" />
          <h2 class="text-xl font-bold text-white">{{ profile()?.fullName }}</h2>
          <p class="text-slate-400 mt-1">ID: <span class="font-mono text-xs">{{ profile()?.id | slice:0:8 }}...</span></p>
    <div class="mt-6 w-full border-t border-slate-700/50 pt-4 flex flex-col gap-4 relative">
             <div class="flex justify-between items-center">
                <span class="text-slate-400 text-sm">Sesión Segura</span>
                <span class="text-emerald-400 text-sm"><i class="pi pi-check-circle"></i> Anónima</span>
             </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-4xl mx-auto">
          <!-- Créditos Contratados -->
          <div class="glass p-6 rounded-2xl border border-slate-700/50">
             <h3 class="text-xl font-bold text-white mb-4">Mis Créditos</h3>
             <div class="space-y-4">
               @for (credit of creditService.applications(); track credit.id) {
                 @if (credit.status === 'active') {
                   <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
                     <p class="text-white font-bold uppercase text-sm tracking-wide mb-1">{{ credit.type }}</p>
                     <p class="text-slate-400 text-sm">Adeudo: <span class="text-white tabular-nums font-mono">{{ getRemainingDebt(credit) | currency }}</span></p>
                   </div>
                 }
               } @empty {
                 <p class="text-slate-500 text-sm text-center py-4">No tienes créditos contratados.</p>
               }
             </div>
          </div>

          <!-- Inversiones Contratadas -->
          <div class="glass p-6 rounded-2xl border border-slate-700/50">
             <h3 class="text-xl font-bold text-white mb-4">Mis Inversiones</h3>
             <div class="space-y-4">
               @for (portfolio of investmentService.portfolio(); track portfolio.id) {
                 <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
                   <p class="text-white font-bold uppercase text-sm tracking-wide mb-1">{{ portfolio.product?.name }}</p>
                   <p class="text-slate-400 text-sm">Valor Actual: <span class="text-emerald-400 tabular-nums font-mono font-bold">{{ portfolio.currentValue | currency }}</span></p>
                 </div>
               } @empty {
                 <p class="text-slate-500 text-sm text-center py-4">Aún no inviertes tu dinero.</p>
               }
             </div>
          </div>
        </div>
      }
    </div>
  `
})
export class ProfileComponent implements OnInit {
  authService = inject(AuthService);
  creditService = inject(CreditServicesService);
  investmentService = inject(InvestmentService);

  profile = this.authService.currentUser;

  ngOnInit() {
    this.creditService.loadApplications();
    this.investmentService.loadPortfolio();
  }

  getRemainingDebt(credit: any): number {
    const paid = credit.metadata?.paidAmount || 0;
    return Math.max(0, credit.requestedAmount - paid);
  }
}
