import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../../interface/hero';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-big-hero-detail',
  templateUrl: './big-hero-detail.component.html',
  styleUrls: ['./big-hero-detail.component.less']
})
export class BigHeroDetailComponent extends HeroDetailComponent implements OnInit {
	@Input()  hero: Hero;
  @Output() deleteRequest = new EventEmitter<Hero>();

  delete() {
    this.deleteRequest.emit(this.hero);
  }
  // constructor() { }

  ngOnInit(): void {
  }

}
