import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { ParentToViewChildTimerComponent }  from './parent-to-view-child-timer/parent-to-view-child-timer.component';

@Component({
  selector: 'app-parent-to-view-child',
  templateUrl: './parent-to-view-child.component.html',
  styleUrls: ['./parent-to-view-child.component.less']
})
export class ParentToViewChildComponent implements OnInit, AfterViewInit {
	@ViewChild(ParentToViewChildTimerComponent, {static: false})
  private timerComponent: ParentToViewChildTimerComponent;

  constructor() { }

  ngOnInit() {
  }

}
