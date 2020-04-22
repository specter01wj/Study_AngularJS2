import { Component, OnInit } from '@angular/core';

import { LoggerService }  from '../services/logger.service';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.less']
})
export class SpyComponent implements OnInit {
	newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) { }

  ngOnInit() {
  }

}
