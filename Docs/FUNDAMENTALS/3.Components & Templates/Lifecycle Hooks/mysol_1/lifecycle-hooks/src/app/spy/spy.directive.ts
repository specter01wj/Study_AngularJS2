import { Directive, OnInit, OnDestroy } from '@angular/core';

import { LoggerService } from '../services/logger.service';

@Directive({
  selector: '[appSpy]'
})
export class SpyDirective {

  constructor() { }

}
