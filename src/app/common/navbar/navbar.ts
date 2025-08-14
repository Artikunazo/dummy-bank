import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [ButtonModule],
	template: `
		<nav>
			<button
				pButton
				severity="secondary"
				icon="pi pi-angle-left"
				[outlined]="true"
				(click)="goBack()"
				[text]="true"
			></button>
		</nav>
	`,
	styleUrl: './navbar.css',
})
export class Navbar {
	goBack() {
		window.history.back();
	}
}
