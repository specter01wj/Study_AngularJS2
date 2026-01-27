import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-with-host-binding',
  templateUrl: './comp-with-host-binding.component.html',
  styleUrls: ['./comp-with-host-binding.component.less'],
  host: {
    '[class.special]': 'isSpecial',
    '[style.color]': 'color',
    '[style.width]': 'width'
  }
})
export class CompWithHostBindingComponent implements OnInit {
	isSpecial = false;
  color = 'green';
  width = '200px';

  constructor() { }

  ngOnInit(): void {
  }

}
