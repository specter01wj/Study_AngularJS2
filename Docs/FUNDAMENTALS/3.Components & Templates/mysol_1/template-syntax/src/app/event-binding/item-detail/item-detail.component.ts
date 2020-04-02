import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { ItemEvent } from '../../interface/item-event';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.less']
})
export class ItemDetailComponent implements OnInit {
	@Input() item;
  itemImageUrl = 'assets/teapot.svg';
  lineThrough = '';
  displayNone = '';
  @Input() prefix = '';

  constructor() { }

  ngOnInit(): void {
  }

}
