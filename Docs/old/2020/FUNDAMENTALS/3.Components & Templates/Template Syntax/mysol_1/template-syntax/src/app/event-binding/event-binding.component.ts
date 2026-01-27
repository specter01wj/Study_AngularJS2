import { Component, OnInit } from '@angular/core';

import { ItemEvent } from '../interface/item-event';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.less']
})
export class EventBindingComponent implements OnInit {
	currentItem = { name: 'teapot'} ;
  clickMessage = 'Kim';

  constructor() { }

  ngOnInit(): void {
  }

  onSave(event?: KeyboardEvent) {
    const evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  deleteItem(item: ItemEvent) {
    alert(`Delete the ${item.name}.`);
  }

  onClickMe(event?: KeyboardEvent) {
    const evtMsg = event ? ' Event target class is ' + (<HTMLElement>event.target).className  : '';
    alert('Click me.' + evtMsg);
  }

}
