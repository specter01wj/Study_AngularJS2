import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aliasing',
  templateUrl: './aliasing.component.html',
  styleUrls: ['./aliasing.component.less'],
  inputs: ['input1: saveForLaterItem'], // propertyName:alias
  outputs: ['outputEvent1: saveForLaterEvent']
})
export class AliasingComponent implements OnInit {
	input1: string;
  outputEvent1: EventEmitter<string> = new EventEmitter<string>();

  @Input('wishListItem') input2: string; //  @Input(alias)
  @Output('wishEvent') outputEvent2 = new EventEmitter<string>(); //  @Output(alias) propertyName = ...

  constructor() { }

  ngOnInit(): void {
  }


  saveIt() {
    console.warn('Child says: emiting outputEvent1 with', this.input1);
    this.outputEvent1.emit(this.input1);
  }

  wishForIt() {
    console.warn('Child says: emiting outputEvent2', this.input2);
    this.outputEvent2.emit(this.input2);
  }

}
