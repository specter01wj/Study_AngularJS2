import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../../interface/hero';

@Component({
  selector: 'app-hero-detail',
  inputs: ['hero'],
  outputs: ['deleteRequest'],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
	// hero: Hero = new Hero(-1, '', 'Zzzzzzzz'); // default sleeping hero
  // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
  // Public Domain terms of use: http://www.wpclipart.com/terms.html
  heroImageUrl = 'assets/images/optimum.jpeg';
  lineThrough = '';
  // @Input('hero') hero: Hero = new Hero(-1, '', 'Zzzzzzzz');
  hero: Hero = new Hero(-1, 'James', 'Zzzzzzzz');
  @Input() prefix = '';
  // @Output() deleteRequest = new EventEmitter<Hero>();
  deleteRequest = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit(this.hero);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
