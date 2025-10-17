import { Component } from '@angular/core';
import { ChildSignal } from '../child-signal/child-signal';

@Component({
  selector: 'app-parent-signal',
  imports: [ChildSignal],
  templateUrl: './parent-signal.html',
  styleUrl: './parent-signal.css'
})
export class ParentSignal {
  meuNome = 'Anthony';
  idade = 40;
}
