import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';

import { LoggerService }  from '../../services/logger.service';

import { AfterContentGrandchildComponent } from '../after-content-grandchild/after-content-grandchild.component';

@Component({
  selector: 'app-after-content-child',
  templateUrl: './after-content-child.component.html',
  styleUrls: ['./after-content-child.component.less']
})
export class AfterContentChildComponent implements OnInit, AfterContentChecked, AfterContentInit {
	private prevHero = '';
  comment = '';

  // Query for a CONTENT child of type `AfterContentGrandchildComponent`
  @ContentChild(AfterContentGrandchildComponent, {static: true}) contentChild: AfterContentGrandchildComponent;

  constructor(private logger: LoggerService) { 
  	this.logIt('AfterContent constructor');
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }

}
