import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-little-tour',
  templateUrl: './little-tour.component.html',
  styleUrls: ['./little-tour.component.less']
})
export class LittleTourComponent implements OnInit {
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { }

  ngOnInit() {
  }


  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
