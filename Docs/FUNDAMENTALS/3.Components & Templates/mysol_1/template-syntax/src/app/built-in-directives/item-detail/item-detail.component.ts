import { Component, OnInit, Input } from '@angular/core';

import { ItemBuiltIND } from '../../interface/item-builtind';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.less']
})
export class ItemDetailComponent implements OnInit {
	@Input() item: ItemBuiltIND;

  constructor() { }

  ngOnInit(): void {
  }

}
