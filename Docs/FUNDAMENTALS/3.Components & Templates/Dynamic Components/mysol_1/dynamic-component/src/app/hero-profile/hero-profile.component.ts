import { Component, OnInit, Input } from '@angular/core';

import { AdComponent } from '../services/ad';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.less']
})
export class HeroProfileComponent implements OnInit, AdComponent {
	@Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
