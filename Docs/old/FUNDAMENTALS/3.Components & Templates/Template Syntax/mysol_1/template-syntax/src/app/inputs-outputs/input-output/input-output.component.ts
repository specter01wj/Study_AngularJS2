import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.less']
})
export class InputOutputComponent implements OnInit {
	@Input() item: string;
  @Output() deleteRequest = new EventEmitter<string>();

  lineThrough = '';

  constructor() { }

  ngOnInit(): void {
  }
  

  delete() {
    console.warn('Child says: emiting item deleteRequest with', this.item);
    this.deleteRequest.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
