import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { ParentToViewChildTimerComponent }  from './parent-to-view-child-timer/parent-to-view-child-timer.component';

@Component({
  selector: 'app-parent-to-view-child',
  templateUrl: './parent-to-view-child.component.html',
  styleUrls: ['./parent-to-view-child.component.less']
})
export class ParentToViewChildComponent implements OnInit, AfterViewInit {
	@ViewChild(ParentToViewChildTimerComponent, {static: false}) private timerComponent: ParentToViewChildTimerComponent;
	
  constructor() { }

  ngOnInit() {
  }

  seconds() { 
  	return 0; 
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { 
  	this.timerComponent.start(); 
  }

  stop() { 
  	this.timerComponent.stop(); 
  }

}
