import { Component } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  states: Observable<any>;
  showPopup=  false;
  registerForm: FormGroup;

  constructor(public http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    this.states = http.get('http://localhost:8000/states');
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: '',
      street: '',
      zip: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      city: '',
      cc: ['', [Validators.required, Validators.pattern('[0-9]{16}'), this.validateCreditCardNumber]],
      state: '',
    });
  }
  validateCreditCardNumber(control: AbstractControl): ValidationErrors {
    if (control.value.startsWith('37') || control.value.startsWith('4') || control.value.startsWith('5')) {
      return null;
    } else {
      return {'WRONG_CARD_TYPE': 'Your credit card number is not from a supported credit card provider'}
    }
  }

  logForm() {
    console.log(this.registerForm.value);
    this.http.put('http://localhost:8000/checkout', this.registerForm.value).subscribe(success => this.showPopup = true);
  }

  goToHome() {
    this.showPopup = false;
    this.router.navigateByUrl('/');
  }
}
