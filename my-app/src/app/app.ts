import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calendar } from './calendar/calendar';
import { Parent } from './input/parent/parent';
import { Counter } from './counter/counter';
import { Timer } from './timer/timer';
import { ParentSignal } from './input-signal/parent-signal/parent-signal';
import { Focus } from './focus/focus';
import { TimePipePipe } from './time-pipe-pipe';
import { Post } from './post/post';
import { Pizzalist } from './pizzas/pizzalist/pizzalist';
import { Cart } from './pizzas/cart/cart';
import { Form } from './form/form';
import { Form2 } from './form2/form2';

@Component({
  selector: 'app-root',
  imports: [Calendar, Parent, Counter, Timer, ParentSignal, Focus, TimePipePipe, Post, Pizzalist, Cart, Form, Form2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="Pedro Hurtado"
  data:number[]=[]
  getUser(){
    /*
      tenga cierta complejidad
      use and 'role' in admin
    */
    //return "user"
  }
  handlerClick(ev:Event){
    ev.stopPropagation()
    this.data.push(this.data.length+1)
  }
}