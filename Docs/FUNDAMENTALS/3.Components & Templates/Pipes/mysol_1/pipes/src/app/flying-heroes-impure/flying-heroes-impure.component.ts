import { Component, OnInit } from '@angular/core';

import { FlyingHeroesModule } from '../flying-heroes/flying-heroes.module';

@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styleUrls: ['./flying-heroes-impure.component.less']
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent implements OnInit {
	title = 'Flying Heroes (impure pipe)';

  constructor() { 
  	super();
  }

  ngOnInit(): void {
  }

}
