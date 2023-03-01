import { Component } from '@angular/core';

import { Hero } from './interface/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Tour of Heroes';
  // myHero = 'Windstorm';
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  heroes = [
	  new Hero(1, 'Windstorm'),
	  new Hero(13, 'Bombasto'),
	  new Hero(15, 'Magneta'),
	  new Hero(20, 'Tornado')
	];
  myHero = this.heroes[0];
}
