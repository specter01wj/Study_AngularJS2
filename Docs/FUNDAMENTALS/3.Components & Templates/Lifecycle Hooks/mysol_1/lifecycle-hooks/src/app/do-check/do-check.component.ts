import { Component, OnInit, DoCheck, Input, ViewChild } from '@angular/core';

import { Hero } from '../services/hero';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.less']
})
export class DoCheckComponent implements OnInit {
	hero: Hero;
  power: string;
  title = 'DoCheck';
  // @ViewChild(DoCheckComponent) childView: DoCheckComponent;

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    // if (this.childView) { this.childView.reset(); }
  }

}
