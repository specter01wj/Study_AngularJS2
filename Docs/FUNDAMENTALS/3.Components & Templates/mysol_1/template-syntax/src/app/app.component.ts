import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Template Syntax';
  heroImageUrl = 'assets/images/soundwave.png';

  getVal(): number { return 2; }



}
