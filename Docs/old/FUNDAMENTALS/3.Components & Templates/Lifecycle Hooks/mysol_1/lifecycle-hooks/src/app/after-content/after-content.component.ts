import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';

import { LoggerService }  from '../services/logger.service';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.less']
})
export class AfterContentComponent implements OnInit {
	show = true;

  constructor(public logger: LoggerService) { }

  ngOnInit() {
  }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }

}
