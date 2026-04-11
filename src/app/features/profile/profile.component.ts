import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

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
      }
    </div>
  `
})
export class ProfileComponent {
  authService = inject(AuthService);
  profile = this.authService.currentUser;
}
