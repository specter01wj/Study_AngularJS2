import { Component, OnInit, Input } from '@angular/core';

import { ITEMS } from '../mock-items';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {
	@Input() items: Item[];
  listItems = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
