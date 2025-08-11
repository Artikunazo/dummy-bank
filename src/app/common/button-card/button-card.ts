import {Component, computed, input, output} from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-button-card',
  standalone: true,
	imports: [ButtonModule],
	template: `
		<button
			class="cursor-pointer btn btn-primary mt-2"
			[attr.title]="buttonAttrTitle()"
      (click)="handleClick()"
		>
			<svg class="w-6 h-6 card-icon">
				<use [attr.href]="hrefSvgUse()" />
			</svg>
		</button>
	`,
	styleUrl: './button-card.css',
})
export class ButtonCard {
  buttonAttrTitle = input<string>();
  buttonIconName = input<string>();
  buttonClick = output<void>();

  hrefSvgUse = computed(() => `/assets/${this.buttonIconName()}.svg`);

  handleClick() {
    // console.log('Button clicked:', this.buttonAttrTitle());
    this.buttonClick.emit();
  }
}
