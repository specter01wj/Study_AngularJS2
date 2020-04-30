import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.less']
})
export class ChildToParentComponent implements OnInit {
	agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  constructor() { }

  ngOnInit() {
  }
  
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
