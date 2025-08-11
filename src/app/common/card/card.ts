import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="shadow-lg outline outline-black/5 mr-4 p-4 rounded-xl">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './card.css'
})
export class Card {

}
