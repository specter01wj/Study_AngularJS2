import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../services/hero';

@Component({
  selector: 'app-hero-controls',
  templateUrl: './hero-controls.component.html',
  styleUrls: ['./hero-controls.component.less']
})
export class HeroControlsComponent implements OnInit {
	@Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  activate() {
    this.hero.active = true;
  }

}
