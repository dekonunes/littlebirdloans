import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ]))]), { optional: true })
      ]),
    ])
  ]
})
export class CardComponent {
  @Output() index = new EventEmitter<number>();

  cards = ['Personal Loan', 'Business Loan', 'Debt Consolidation', 'Home Loan', 'Car Loan', 'Student Loan', 'Wedding Loan', 'Moving Home'];
}
