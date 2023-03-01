import { Component, OnInit } from '@angular/core';

import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-hero-message',
  templateUrl: './hero-message.component.html',
  styleUrls: ['./hero-message.component.less']
})
export class HeroMessageComponent implements OnInit {
	message$: Observable<string>;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() { 
  	this.resend();
  }

  ngOnInit(): void {
  }

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
    /*this.message$ = fromArray(this.messages).pipe(
		  map(message => timer(500),
		  map(() => message)),
		  concatAll()
		);*/
  }

}
