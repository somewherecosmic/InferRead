import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reading-card',
  templateUrl: './reading-card.component.html',
  styleUrls: ['./reading-card.component.scss']
})
export class ReadingCardComponent {
  @Input() id: any;
  @Input() title: string;
  @Input() language: string;
  @Input() length: number;
}
