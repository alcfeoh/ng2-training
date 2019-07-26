import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface State {
  name: string;
  abbreviation: string;
}

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  states$: Observable<State[]>;

  constructor(private http: HttpClient) {
    this.states$ = http.get<State[]>('http://localhost:8000/states');
  }

  logForm(value) {
    console.log(value);
    this.http.post('http://localhost:8000/checkout', value)
      .subscribe(success => alert('Order successful'));
  }
}
