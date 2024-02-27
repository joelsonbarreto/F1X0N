import { Component } from '@angular/core';
import { PercentCardComponent } from '../percent-card/percent-card.component';
import { PaymentCardComponent } from '../payment-card/payment-card.component';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PercentCardComponent, PaymentCardComponent, ArticleComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
