import { Injectable } from '@angular/core';

import { Hero } from '../interface/hero';
import { HEROES } from '../api/mock-heroes';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /*getHeroes(): Hero[] {
	return HEROES;
  }*/

  getHeroes(): Observable<Hero[]> {
	return of(HEROES);
  }

}
