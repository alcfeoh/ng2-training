import { Component } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  states: Observable<any>;
  showPopup=  false;

  constructor(public http: HttpClient, private router: Router) {
    this.states = http.get('http://localhost:8000/states');
  }

  logForm(value) {
    console.log(value);	    console.log(value);
    this.http.put('http://localhost:8000/checkout', value).subscribe(success => this.showPopup = true);
  }

  goToHome() {
    this.showPopup = false;
    this.router.navigateByUrl('/');
  }
}
