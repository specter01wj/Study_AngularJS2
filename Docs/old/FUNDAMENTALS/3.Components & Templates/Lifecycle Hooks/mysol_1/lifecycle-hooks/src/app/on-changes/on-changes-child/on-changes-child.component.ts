import { Component, OnInit, Input, OnChanges,
  SimpleChanges, ViewChild } from '@angular/core';

import { Hero } from '../../services/hero';

@Component({
  selector: 'app-on-changes-child',
  templateUrl: './on-changes-child.component.html',
  styleUrls: ['./on-changes-child.component.less']
})
export class OnChangesChildComponent implements OnInit, OnChanges {
	@Input() hero: Hero;
  @Input() power: string;

  changeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  reset() { this.changeLog = []; }

}
