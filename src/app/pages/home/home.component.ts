import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { ContentLeftComponent } from '../../components/content-left/content-left.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ContentLeftComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
