import { Component, effect, viewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FocusDirective } from './focus-directive';

@Component({
  selector: 'app-focus',
  imports: [FocusDirective],
  templateUrl: './focus.html',
  styleUrl: './focus.css'
})
export class Focus {
  //nameInput = viewChild<ElementRef<HTMLInputElement>>('nameInput');

  constructor() {
    /*
    effect(() => {
      const input = this.nameInput();
      if (input) {
        input.nativeElement.focus();
      }
    });
    */
  }
}
