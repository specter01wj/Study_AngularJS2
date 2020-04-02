import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
	@Output('myClick') clicks = new EventEmitter<string>();

	toggle = false;

  constructor(el: ElementRef) { 
  	el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'Click!' : '');
      });
  }

}
