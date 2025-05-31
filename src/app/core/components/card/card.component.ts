import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: 'card.component.html',
  styles: ``
})
export class CardComponent {

  @Input() imageURL: String = '/photo-1553062407-98eeb64c6a62.avif'
  @Input() title: string = 'Modern Backpack';
  @Input() description: string = 'Accessories';
  @Input() price: number = 50;
}
