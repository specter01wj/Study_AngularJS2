import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
	@Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;
	
  constructor(private el: ElementRef) { }

}
