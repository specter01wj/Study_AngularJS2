import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';

import { LoggerService }  from '../../services/logger.service';

import { AfterViewGrandchildComponent } from '../after-view-grandchild/after-view-grandchild.component';

@Component({
  selector: 'app-after-view-child',
  templateUrl: './after-view-child.component.html',
  styleUrls: ['./after-view-child.component.less']
})
export class AfterViewChildComponent implements OnInit {
	private prevHero = '';

  // Query for a VIEW child of type `AfterViewGrandchildComponent`
  // @ViewChild(AfterViewGrandchildComponent) viewChild: AfterViewGrandchildComponent;

  constructor(private logger: LoggerService) { 
  	this.logIt('AfterView constructor');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked() {
    // viewChild is updated after the view has been checked
    /*if (this.prevHero === this.viewChild.hero) {
      this.logIt('AfterViewChecked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }*/
  }

  comment = '';

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    /*let c = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (c !== this.comment) {
      // Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => this.comment = c);
    }*/
  }

  private logIt(method: string) {
    /*let child = this.viewChild;
    let message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);*/
  }

}
