import { Component, OnInit } from '@angular/core';

import { HEROES } from '../services/hero';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.less']
})
export class ParentToChildComponent implements OnInit {
	heroes = HEROES;




	
  master = 'Master';

  constructor() { }

  ngOnInit() {
  }

}
