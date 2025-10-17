import { Component, computed, signal } from '@angular/core';
import { CommunicationService } from '../../core/comunication-service';
import { Pizza } from '../pizza';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  pizzas = signal<Pizza[]>([]);
  total = computed(() => this.pizzas()
    .map(p => p.price)
    .reduce((acc, price) => acc + price, 0))

   constructor(
      private communicationService: CommunicationService<Pizza>
      ) {
        this.communicationService.observable$
        .pipe(takeUntilDestroyed())
        .subscribe(pizza => {
          if (pizza) {
            this.pizzas.update(pizzas => [...pizzas, pizza]); // Trigger change detection
          }
        });
    }
    clearCart() { 
      this.pizzas.set([]);
    }
}
