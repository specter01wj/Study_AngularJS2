import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Hero } from '../interface/hero';
import { HEROES } from '../api/mock-heroes';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  /*getHeroes(): Hero[] {
	return HEROES;
  }*/

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);


    
  }

  getHeroes(): Observable<Hero[]> {
  	this.messageService.add('HeroService: fetched heroes');
		// return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
	  // TODO: send the message _after_ fetching the hero
	  this.messageService.add(`HeroService: fetched hero id=${id}`);
	  return of(HEROES.find(hero => hero.id === id));
	}

}
