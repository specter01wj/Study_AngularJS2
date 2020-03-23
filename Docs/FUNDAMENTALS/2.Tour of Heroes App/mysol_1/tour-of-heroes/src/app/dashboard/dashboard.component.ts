import { Component, OnInit } from '@angular/core';

import { Hero } from '../interface/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

  constructor() { }

  ngOnInit() {
  }

}
