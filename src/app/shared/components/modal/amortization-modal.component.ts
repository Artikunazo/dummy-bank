import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditApplication } from '../../../core/models';
import { CurrencyMxnPipe } from '../../pipes/currency-mxn.pipe';

@Component({
  selector: 'app-amortization-modal',
  standalone: true,
  imports: [CommonModule, CurrencyMxnPipe],
  template: `
    @if (visible) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div class="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
          
          <div class="p-6 border-b border-white/5 flex justify-between items-center bg-slate-800">
            <h2 class="text-xl font-bold text-white flex items-center gap-2">
              <i class="pi pi-table text-primary-400"></i> Tabla de Amortización Simulada
            </h2>
            <button (click)="close()" class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <i class="pi pi-times"></i>
            </button>
          </div>

          <div class="p-6 overflow-y-auto custom-scrollbar flex-1">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
               <div class="bg-slate-950 p-4 rounded-xl border border-white/5">
                  <p class="text-slate-500 text-xs mb-1">Monto Solicitado</p>
                  <p class="text-white font-mono font-bold">{{ credit?.requestedAmount || 0 | currencyMxn }}</p>
               </div>
               <div class="bg-slate-950 p-4 rounded-xl border border-white/5">
                  <p class="text-slate-500 text-xs mb-1">Tasa de Interés</p>
                  <p class="text-emerald-400 font-mono font-bold">{{ credit?.interestRate || 0 }}%</p>
               </div>
               <div class="bg-slate-950 p-4 rounded-xl border border-white/5">
                  <p class="text-slate-500 text-xs mb-1">Plazo</p>
                  <p class="text-white font-mono font-bold">{{ credit?.termMonths || 0 }} meses</p>
               </div>
               <div class="bg-slate-950 p-4 rounded-xl border border-white/5">
                  <p class="text-slate-500 text-xs mb-1">Pago Estimado</p>
                  <p class="text-white font-mono font-bold">{{ credit?.monthlyPayment || simulatedPayment | currencyMxn }}</p>
               </div>
            </div>

            <div class="overflow-hidden rounded-xl border border-slate-800">
              <table class="w-full text-left text-sm whitespace-nowrap">
                <thead class="bg-slate-950 text-slate-400 font-medium">
                  <tr>
                    <th class="px-4 py-3 border-b border-slate-800">Mes</th>
                    <th class="px-4 py-3 border-b border-slate-800">Saldo Inicial</th>
                    <th class="px-4 py-3 border-b border-slate-800">Interés</th>
                    <th class="px-4 py-3 border-b border-slate-800">Capital</th>
                    <th class="px-4 py-3 border-b border-slate-800">Saldo Final</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800">
                  @for (row of amortizationTable; track row.month) {
                    <tr class="hover:bg-slate-800/50 transition-colors">
                      <td class="px-4 py-3 text-white font-mono opacity-60">{{ row.month }}</td>
                      <td class="px-4 py-3 text-white font-mono">{{ row.initialBalance | currencyMxn }}</td>
                      <td class="px-4 py-3 text-crimson-400 font-mono">{{ row.interest | currencyMxn }}</td>
                      <td class="px-4 py-3 text-emerald-400 font-mono">{{ row.principal | currencyMxn }}</td>
                      <td class="px-4 py-3 text-white font-mono font-medium">{{ row.finalBalance | currencyMxn }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
            
            <p class="mt-4 text-xs text-slate-500 text-center">
              * Esta tabla es una simulación lineal y puede no reflejar el saldo exacto después de abonos a capital.
            </p>
          </div>
        </div>
      </div>
    }
  `
})
export class AmortizationModalComponent {
  @Input() visible = false;
  @Input() credit: CreditApplication | null = null;
  @Output() visibleChange = new EventEmitter<boolean>();

  get simulatedPayment() {
    if (!this.credit) return 0;
    const principal = this.credit.requestedAmount;
    const monthlyRate = (this.credit.interestRate / 100) / 12;
    const months = this.credit.termMonths;
    if (monthlyRate === 0) return principal / months;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  }

  get amortizationTable() {
    if (!this.credit) return [];
    
    // Simulate amortization table standard calculation
    const principal = this.credit.requestedAmount;
    const rate = (this.credit.interestRate / 100) / 12;
    const months = this.credit.termMonths || 12;
    // Calculate simple linear payment
    const payment = this.credit.monthlyPayment || this.simulatedPayment;
    
    let balance = principal;
    const table = [];

    // Assuming standard Mexican formula or simple simulated one.
    // For realistic purposes in the app we just display a standard table based on requestedAmount.
    for (let i = 1; i <= months; i++) {
        let interest = balance * rate;
        let capital = payment - interest;
        
        let initial = balance;
        balance -= capital;
        
        if (balance < 0) {
            capital += balance; // Adjust last payment
            balance = 0;
        }
        
        table.push({
            month: i,
            initialBalance: initial,
            interest: interest,
            principal: capital,
            finalBalance: Math.max(0, balance)
        });
        
        if (balance <= 0) break;
    }
    
    return table.slice(0, 360); // Cap at 360 to prevent infinity issues just in case
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
