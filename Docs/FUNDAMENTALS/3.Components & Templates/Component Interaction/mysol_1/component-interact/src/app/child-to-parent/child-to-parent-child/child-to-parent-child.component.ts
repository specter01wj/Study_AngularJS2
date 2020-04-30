import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent-child',
  templateUrl: './child-to-parent-child.component.html',
  styleUrls: ['./child-to-parent-child.component.less']
})
export class ChildToParentChildComponent implements OnInit {
	@Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
