import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.less']
})
export class PropertyBindingComponent implements OnInit {
	title: string = "PropertyBinding";

  constructor() { }

  ngOnInit(): void {
  }

}
