import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'AttributeDirective';
  color: string;

  clickColor(color): void {
  	this.color = color;
  }

}
