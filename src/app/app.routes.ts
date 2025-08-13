import {Routes} from '@angular/router';
import {Login} from './login/login';
import {ForgotPassword} from './forgot-password/forgot-password';
import {userGuard, userLoggedGuard} from './guards/user-guard';

export const routes: Routes = [
	{
		path: '',
		component: Login,
		canActivate: [userLoggedGuard],
	},
	{
		path: 'forgot-password',
		component: ForgotPassword,
		canActivate: [userLoggedGuard],
	},
	{
		path: 'dashboard',
		canActivate: [userGuard],
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./dashboard/dashboard').then(
						(component) => component.Dashboard,
					),
			},
			{
				path: 'mortgage',
				loadComponent: () =>
					import('./dashboard/mortgages/mortgages').then(
						(component) => component.Mortgages,
					),
			},
			{
				path: 'car-loan',
				loadComponent: () =>
					import('./dashboard/car-loan/car-loan').then(
						(component) => component.CarLoan,
					),
			},
			{
				path: 'credit-card',
				loadComponent: () =>
					import('./dashboard/credit-card/credit-card').then(
						(component) => component.CreditCard,
					),
			},

			{
				path: 'user-profile',
				loadComponent: () =>
					import('./dashboard/user-profile/user-profile').then(
						(component) => component.UserProfile,
					),
			},
		],
	},
];
