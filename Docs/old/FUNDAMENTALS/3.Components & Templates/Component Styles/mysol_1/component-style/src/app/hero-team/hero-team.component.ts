import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../services/hero';

@Component({
  selector: 'app-hero-team',
  templateUrl: './hero-team.component.html',
  styleUrls: ['./hero-team.component.less']
})
export class HeroTeamComponent implements OnInit {
	@Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
