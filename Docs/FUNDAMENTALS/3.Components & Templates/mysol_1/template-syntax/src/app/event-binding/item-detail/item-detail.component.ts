import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { ItemEvent } from '../../interface/item-event';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.less']
})
export class ItemDetailComponent implements OnInit {
	@Input() item;
  itemImageUrl = 'assets/images/teapot.svg';
  lineThrough = '';
  displayNone = '';
  @Input() prefix = '';
  // This component makes a request but it can't actually delete a hero.
  @Output() deleteRequest = new EventEmitter<ItemEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
