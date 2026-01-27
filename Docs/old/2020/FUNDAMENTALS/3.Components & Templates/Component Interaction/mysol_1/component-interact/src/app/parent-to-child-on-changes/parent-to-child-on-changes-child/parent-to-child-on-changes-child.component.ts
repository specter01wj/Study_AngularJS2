import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-on-changes-child',
  templateUrl: './parent-to-child-on-changes-child.component.html',
  styleUrls: ['./parent-to-child-on-changes-child.component.less']
})
export class ParentToChildOnChangesChildComponent implements OnInit {
	@Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
