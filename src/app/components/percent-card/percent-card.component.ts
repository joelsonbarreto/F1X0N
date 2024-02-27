import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-percent-card',
  standalone: true,
  imports: [],
  templateUrl: './percent-card.component.html',
  styleUrl: './percent-card.component.scss'
})
export class PercentCardComponent {
@Input() percent!: string;
@Input() distac!: string;
@Input() title!: string;
}
