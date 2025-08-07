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
        loadChildren: () => import('./components/dashboard/dashboard').then(m => m.Dashboard),
      },
      {
        path: 'user-profile',
        loadChildren: () => import('./components/user-profile/user-profile').then(m => m.UserProfile),
      }
    ]
  }
];
