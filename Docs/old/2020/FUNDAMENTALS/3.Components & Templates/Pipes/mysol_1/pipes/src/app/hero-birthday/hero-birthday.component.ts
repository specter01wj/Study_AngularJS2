import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  templateUrl: './hero-birthday.component.html',
  styleUrls: ['./hero-birthday.component.less']
})
export class HeroBirthdayComponent implements OnInit {
	birthday = new Date(1988, 3, 15); // April 15, 1988
	
  constructor() { }

  ngOnInit(): void {
  }

}
