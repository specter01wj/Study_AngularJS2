import { Component } from '@angular/core';

import { Hero, heroes } from './services/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'StructualDirective';
  heroes = heroes;
  hero = this.heroes[0];

  condition = false;
  logs: string[] = [];










  
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number {
  	return hero.id; 
  }

}
