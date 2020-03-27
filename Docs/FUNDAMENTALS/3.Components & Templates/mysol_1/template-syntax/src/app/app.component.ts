import { Component, AfterViewInit, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

import { Hero } from './hero';

export enum Color {Red, Green, Blue}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Template Syntax';
  heroImageUrl = 'assets/images/soundwave.png';

  getVal(): number { return 2; }



}
