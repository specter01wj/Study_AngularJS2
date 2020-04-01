import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.less']
})
export class AttributeBindingComponent implements OnInit {
	actionName = 'Go for it';
  isSpecial = true;
  canSave = true;
  classExpr = 'special clearance';
  styleExpr = 'color: red';
  color = 'blue';
  
  constructor() { }

  ngOnInit(): void {
  }

}
