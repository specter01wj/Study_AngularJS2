import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.less']
})
export class ClickMeComponent implements OnInit {
	clickMessage = '';

  constructor() { }

  ngOnInit() {
  }
  

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

}
