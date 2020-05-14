import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styleUrls: ['./flying-heroes-impure.component.less']
})
export class FlyingHeroesImpureComponent implements OnInit {
	title = 'Flying Heroes (impure pipe)';
	
  constructor() { }

  ngOnInit(): void {
  }

}
