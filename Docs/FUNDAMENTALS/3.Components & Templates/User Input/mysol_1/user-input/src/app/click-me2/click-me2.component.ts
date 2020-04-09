import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me2',
  templateUrl: './click-me2.component.html',
  styleUrls: ['./click-me2.component.less']
})
export class ClickMe2Component implements OnInit {
	clickMessage = '';
  clicks = 1;

  constructor() { }

  ngOnInit() {
  }
  

  onClickMe2(event: any) {
    let evtMsg = event ? ' Event target is ' + event.target.tagName  : '';
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  }

}
