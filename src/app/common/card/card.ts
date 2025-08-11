import {Component} from '@angular/core';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [],
	template: `
		<div class="shadow-md outline outline-black/1 p-4 rounded-lg">
			<ng-content></ng-content>
		</div>
	`,
	styleUrl: './card.css',
})
export class Card {}
