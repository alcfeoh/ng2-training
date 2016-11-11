import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef, renderer: Renderer) {
      renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
}
