import { Component, signal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  counter = signal<number>(0);
  increment() { 
    this.counter.update((current) => ++current);
    // this.counter.set(this.counter()++);
  }
  decrement() { 
    if (this.counter() > 0) {
      this.counter.update((current) => --current);
    // this.counter.set(this.counter()--);
    }
  }
}
