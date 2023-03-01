import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../../services/hero';

@Component({
  selector: 'app-parent-to-child-child',
  templateUrl: './parent-to-child-child.component.html',
  styleUrls: ['./parent-to-child-child.component.less']
})
export class ParentToChildChildComponent implements OnInit {
	@Input() hero: Hero;
  @Input('master') masterName: string;

  constructor() { }

  ngOnInit() {
  }

}
