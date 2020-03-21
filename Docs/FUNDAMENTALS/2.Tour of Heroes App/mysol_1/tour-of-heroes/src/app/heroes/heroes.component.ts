import { Component, OnInit } from '@angular/core';

import { Hero } from '../interface/hero';
import { HEROES } from '../api/mock-heroes';

import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

	// hero = 'Windstorm';
	/*hero: Hero = {
	  	id: 1,
	  	name: 'Windstorm'
	}*/

  	// heroes = HEROES;
  	heroes: Hero[];
  	selectedHero: Hero;

  	constructor(
  		private heroService: HeroService,
  		private messageService: MessageService
  	) { }

	ngOnInit() {
		this.getHeroes();


		
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
	}

	/*getHeroes(): void {
		this.heroes = this.heroService.getHeroes();
	}*/

	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

}
