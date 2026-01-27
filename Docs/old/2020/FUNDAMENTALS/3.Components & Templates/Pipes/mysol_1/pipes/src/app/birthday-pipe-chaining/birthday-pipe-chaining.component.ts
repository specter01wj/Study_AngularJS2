import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-pipe-chaining',
  templateUrl: './birthday-pipe-chaining.component.html',
  styleUrls: ['./birthday-pipe-chaining.component.less']
})
export class BirthdayPipeChainingComponent implements OnInit {
	birthday = new Date(1988, 3, 15); // April 15, 1988
	
  constructor() { }

  ngOnInit(): void {
  }

}
