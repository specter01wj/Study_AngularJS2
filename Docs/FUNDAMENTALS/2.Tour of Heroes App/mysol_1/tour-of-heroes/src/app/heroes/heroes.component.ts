import { Component, OnInit } from '@angular/core';

import { Hero } from '../interface/hero';
import { HEROES } from '../api/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';
  hero: Hero = {
  	id: 1,
  	name: 'Windstorm'
  }

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
