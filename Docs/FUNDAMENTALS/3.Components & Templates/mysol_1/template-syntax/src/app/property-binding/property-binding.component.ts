import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.less']
})
export class PropertyBindingComponent implements OnInit {
	title: string = "PropertyBinding";
	itemImageUrl = 'assets/images/optimum.jpeg';
  isUnchanged = true;
  classes = 'special';
  parentItem = 'lamp';

  currentItems = [{
    id: 21,
    name: 'phone'
  }];

  interpolationTitle = 'Interpolation';
  propertyTitle = 'Property binding';

  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';

  constructor() { }

  ngOnInit(): void {
  }

}
