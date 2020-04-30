import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-child',
  templateUrl: './child-to-parent-child.component.html',
  styleUrls: ['./child-to-parent-child.component.less']
})
export class ChildToParentChildComponent implements OnInit {
	@Input('name')  name: string;
  @Output('voted') voted = new EventEmitter<Object>();
  didVote = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean, name: string) {
    this.voted.emit({agreed, name});
    this.didVote = true;
  }

}
