import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  inputs: ['hero'],
  outputs: ['deleteRequest'],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
	hero: Hero = new Hero(-1, '', 'Zzzzzzzz'); // default sleeping hero
  // heroImageUrl = 'http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png';
  // Public Domain terms of use: http://www.wpclipart.com/terms.html
  heroImageUrl = 'assets/images/hero.png';
  lineThrough = '';
  @Input() prefix = '';

  // This component makes a request but it can't actually delete a hero.
  deleteRequest = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit(this.hero);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
