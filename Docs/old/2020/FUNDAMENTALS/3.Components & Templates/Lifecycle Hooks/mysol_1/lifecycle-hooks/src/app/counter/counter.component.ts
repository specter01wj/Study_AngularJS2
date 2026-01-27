import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { LoggerService }  from '../services/logger.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {
	value: number;
  spyLog: string[] = [];

  private logger: LoggerService;

  constructor(logger: LoggerService) { 
  	this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }

  ngOnInit() {
  }

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('-- reset --');
    this.value = 0;
    this.logger.tick();
  }

}
