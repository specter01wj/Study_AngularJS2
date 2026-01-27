import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../services/hero';

@Component({
  selector: 'app-hero-app-main',
  templateUrl: './hero-app-main.component.html',
  styleUrls: ['./hero-app-main.component.less']
})
export class HeroAppMainComponent implements OnInit {
	@Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
