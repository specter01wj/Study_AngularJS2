import { Component, OnInit, Input, OnChanges,
  SimpleChanges, ViewChild } from '@angular/core';

import { OnChangesChildComponent } from './on-changes-child/on-changes-child.component';

import { Hero } from '../services/hero';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.less']
})
export class OnChangesComponent implements OnInit {
	hero: Hero;
  power: string;
  title = 'OnChanges';
  @ViewChild(OnChangesChildComponent, {static: false}) childView: OnChangesChildComponent;

  constructor() { 
  	this.reset();
  }

  ngOnInit() {
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) { this.childView.reset(); }
  }

}
