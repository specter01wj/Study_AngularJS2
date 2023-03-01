import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-on-changes',
  templateUrl: './parent-to-child-on-changes.component.html',
  styleUrls: ['./parent-to-child-on-changes.component.less']
})
export class ParentToChildOnChangesComponent implements OnInit {
	major = 1;
  minor = 23;

  constructor() { }

  ngOnInit() {
  }
  
  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

}
