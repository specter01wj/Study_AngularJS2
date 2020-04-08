import { Component, AfterViewInit, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

import { Hero } from './interface/hero';

export enum Color {Red, Green, Blue}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = "TemplateSyntax";

}


