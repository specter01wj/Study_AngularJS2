import { Component, OnInit, AfterContentChecked, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-after-content-grandchild',
  templateUrl: './after-content-grandchild.component.html',
  styleUrls: ['./after-content-grandchild.component.less']
})
export class AfterContentGrandchildComponent implements OnInit {
	hero = 'Magneta';

  constructor() { }

  ngOnInit() {
  }

}
