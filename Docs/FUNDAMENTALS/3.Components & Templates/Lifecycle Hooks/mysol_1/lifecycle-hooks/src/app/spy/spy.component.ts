import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.less']
})
export class SpyComponent implements OnInit {
	newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];
  
  constructor() { }

  ngOnInit() {
  }

}
