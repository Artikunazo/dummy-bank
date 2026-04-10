import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) 
  },
  {
    path: 'cards',
    loadComponent: () => import('./features/card-manager/card-manager.component').then(m => m.CardManagerComponent)
  },
  {
    path: 'investments',
    loadComponent: () => import('./features/investments/investments.component').then(m => m.InvestmentsComponent)
  },
  {
    path: 'investments/:type',
    loadComponent: () => import('./features/investments/investment-detail.component').then(m => m.InvestmentDetailComponent)
  },
  {
    path: 'services/tdc',
    loadComponent: () => import('./features/services/tdc/tdc.component').then(m => m.TdcComponent)
  },
  {
    path: 'services/hipotecario',
    loadComponent: () => import('./features/services/hipotecario/hipotecario.component').then(m => m.HipotecarioComponent)
  },
  {
    path: 'services/automotriz',
    loadComponent: () => import('./features/services/automotriz/automotriz.component').then(m => m.AutomotrizComponent)
  },
  {
    path: 'services/prestamo-personal',
    loadComponent: () => import('./features/services/prestamo-personal/prestamo-personal.component').then(m => m.PrestamoPersonalComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
  },
  { path: '**', redirectTo: 'dashboard' }
];
