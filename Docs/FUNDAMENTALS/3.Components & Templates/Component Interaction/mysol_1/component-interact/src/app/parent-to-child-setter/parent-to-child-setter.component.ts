import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-setter',
  templateUrl: './parent-to-child-setter.component.html',
  styleUrls: ['./parent-to-child-setter.component.less']
})
export class ParentToChildSetterComponent implements OnInit {
	// Displays 'Dr IQ', '<no name set>', 'Bombasto'
	names = ['Dr IQ', '   ', '  Bombasto  '];

  constructor() { }

  ngOnInit() {
  }

}
