import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'app-child-signal',
  imports: [],
  templateUrl: './child-signal.html',
  styleUrl: './child-signal.css'
})
export class ChildSignal {
  // Signal input básico
  nome = input<string>(''); // valor por defeito
  
  // Signal input requerido
  idade = input.required<number>();
  
  // Signal input com transformação
  activo = input(false, {
    transform: (value: boolean | string) => {
      return typeof value === 'string' ? value === 'true' : value;
    }
  });
  
  // Computed baseado em input
  nomeMaiusculas = computed(() => this.nome().toUpperCase());
  
  // Computed baseado em idade
  isAdult = computed(() => this.idade() >= 18 ? 'Sim' : 'Não');
  
  // Effect que reage a alterações no input
  constructor() {
    effect(() => {
      console.log('Nome mudou para:', this.nome());
    });
  }
}
