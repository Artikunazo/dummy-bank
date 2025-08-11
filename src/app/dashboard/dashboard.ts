import {Component, inject, OnInit} from '@angular/core';
import {Products} from './products/products';
import {MyBank} from './my-bank/my-bank';
import {UserService} from '../services/user';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [Products, MyBank],
	template: `
		<section class="dashboard-container p-4">
			<h2 class="text-3xl font-bold mb-3">Welcome {{ username }}!</h2>

			<app-my-bank />

			<app-products />
		</section>
	`,
	styleUrl: './dashboard.css',
})
export class Dashboard {
	private readonly userService = inject(UserService);

	readonly username = this.userService.userState().username;
}
