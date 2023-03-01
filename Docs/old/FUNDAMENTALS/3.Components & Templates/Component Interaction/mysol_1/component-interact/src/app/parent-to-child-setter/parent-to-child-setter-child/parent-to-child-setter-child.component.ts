import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-setter-child',
  templateUrl: './parent-to-child-setter-child.component.html',
  styleUrls: ['./parent-to-child-setter-child.component.less']
})
export class ParentToChildSetterChildComponent implements OnInit {
	private _name = '';

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name(): string { return this._name; }

}
