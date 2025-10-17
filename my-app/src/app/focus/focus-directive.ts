import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appFocusDirective]'
})
export class FocusDirective {
  private element = inject(ElementRef);
  constructor() {}

  ngAfterViewInit(): void {
    this.element.nativeElement.focus();
  }

}
