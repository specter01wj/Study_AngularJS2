import { Injectable } from '@angular/core';

import { MessageService } from './message.service';

import { Hero } from '../interface/hero';
import { HEROES } from '../api/mock-heroes';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  /*getHeroes(): Hero[] {
	return HEROES;
  }*/

  getHeroes(): Observable<Hero[]> {
	return of(HEROES);
  }

}
