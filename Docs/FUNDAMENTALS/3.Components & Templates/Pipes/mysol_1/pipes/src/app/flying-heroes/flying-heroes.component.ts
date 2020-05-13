import { Component, OnInit } from '@angular/core';

import { HEROES } from '../interfaces/heroes';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.less']
})
export class FlyingHeroesComponent implements OnInit {
	heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Flying Heroes (pure pipe)';

  constructor() { 
  	this.reset();
  }

  ngOnInit(): void {
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) { 
    	return; 
    }
    let hero = {name, canFly: this.canFly};
    if (this.mutate) {
    // Pure pipe won't update display because heroes array reference is unchanged
    // Impure pipe will display
    	this.heroes.push(hero);
    } else {
      // Pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() { 
  	this.heroes = HEROES.slice(); 
  }

}
