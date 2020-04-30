import { Component, OnInit } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.less']
})
export class ChildToParentComponent implements OnInit {
	agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];
  totalCnt = 0;
  voteResult = '';
  agreer = [];
  disagreer = [];

  constructor() { }

  ngOnInit() {
  }

  onVoted(event: User) {
    event.agreed ? this.agreed++ : this.disagreed++;
    this.totalCnt++;
    this.voteResult = this.agreed > this.disagreed ? 'Agreed!' : 'Disagreed?';
    event.agreed ? this.agreer.push(event.name) : this.disagreer.push(event.name);
  }

}
