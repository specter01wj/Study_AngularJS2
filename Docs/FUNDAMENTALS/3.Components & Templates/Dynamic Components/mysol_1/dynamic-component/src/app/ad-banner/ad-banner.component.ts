import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from '../ad/ad.directive';
import { AdItem }      from '../services/ad-item';
import { AdComponent } from '../services/ad';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.less']
})
export class AdBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
