import { Component, OnInit, DoCheck, Input, ViewChild } from '@angular/core';

import { DoCheckChildComponent } from './do-check-child/do-check-child.component';

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
  // @ViewChild(DoCheckChildComponent) childView: DoCheckChildComponent;

  constructor() { this.reset(); }

  ngOnInit() {
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    // if (this.childView) { this.childView.reset(); }
  }

}
