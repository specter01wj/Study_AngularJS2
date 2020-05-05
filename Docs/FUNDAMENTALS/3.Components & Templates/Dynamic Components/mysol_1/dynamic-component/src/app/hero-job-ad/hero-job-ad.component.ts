import { Component, OnInit, Input } from '@angular/core';

import { AdComponent } from '../services/ad';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.less']
})
export class HeroJobAdComponent implements OnInit {
	@Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
