import {Component, input, signal} from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CardModule],
	template: `
		<p-card header="{{header()}}" subheader="{{subheader()}}">
			<ng-content></ng-content>

			<p-footer>
				<ng-content select="[footer]"></ng-content>
			</p-footer>
		</p-card>
	`,
	styleUrl: './card.css',
})
export class Card {
  header = input.required<string>();
  subheader = input.required<string | null>();

}
