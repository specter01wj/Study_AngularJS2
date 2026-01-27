import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-in-the-metadata',
  templateUrl: './in-the-metadata.component.html',
  styleUrls: ['./in-the-metadata.component.less'],
  inputs: ['clearanceItem'],
  outputs: ['buyEvent']
})
export class InTheMetadataComponent implements OnInit {
	buyEvent = new EventEmitter<string>();
  clearanceItem: string;

  constructor() { }

  ngOnInit(): void {
  }


  buyIt() {
    console.warn('Child says: emiting buyEvent with', this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }

}
