import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../interface/hero';
import { HeroService }  from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
  @Input("hero-in") hero: Hero;

  constructor(
  	private route: ActivatedRoute,
	  private heroService: HeroService,
	  private location: Location
  ) { }

  ngOnInit() {
  }

}
