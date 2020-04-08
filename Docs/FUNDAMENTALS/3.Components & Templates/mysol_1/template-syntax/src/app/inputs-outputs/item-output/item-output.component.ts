import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.less']
})
export class ItemOutputComponent implements OnInit {
	@Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
