import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pizza } from './pizza';
import { BASE_API_URL } from '../core/base_url';

@Injectable({
  providedIn: 'root'
})
export class Pizzaservice {
  private baseUrlAPI:string = inject(BASE_API_URL);
  private path:string = 'pizzas';
  private http = inject(HttpClient);

  getAll():Promise<Pizza[]>{
    const pizzas = lastValueFrom(this.http.get<Pizza[]>(`${this.baseUrlAPI}/${this.path}`));
    return pizzas;
  }
}
