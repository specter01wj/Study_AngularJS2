import { Component, OnInit, AfterViewChecked, AfterViewInit, ViewChild } from '@angular/core';

import { LoggerService }  from '../services/logger.service';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.less']
})
export class AfterViewComponent implements OnInit {
	show = true;

  constructor(public logger: LoggerService) { }

  ngOnInit() {
  }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }

}
