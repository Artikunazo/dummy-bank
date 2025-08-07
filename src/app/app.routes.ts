import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { ForgotPassword } from './components/forgot-password/forgot-password';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        loadComponent: () => import('./components/dashboard/dashboard').then(c => c.Dashboard),
      },
      {
        path: 'user-profile',
        loadComponent: () => import('./components/user-profile/user-profile').then(c => c.UserProfile),
      }
    ]
  }
];
