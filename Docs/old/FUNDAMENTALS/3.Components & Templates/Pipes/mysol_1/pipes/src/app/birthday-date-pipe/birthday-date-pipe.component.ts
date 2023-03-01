import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-date-pipe',
  templateUrl: './birthday-date-pipe.component.html',
  styleUrls: ['./birthday-date-pipe.component.less']
})
export class BirthdayDatePipeComponent implements OnInit {
	birthday = new Date(1988, 3, 15); // April 15, 1988
	
  constructor() { }

  ngOnInit(): void {
  }

}
