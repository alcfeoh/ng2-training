import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: 'reactive-form.component.html',
  styleUrls: ['template-driven-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: '',
      street: '',
      zip: ['', [Validators.required, Validators.pattern('[0-9]{5}')]],
      city: '',
      cc: ['', [Validators.required] ]
    })
  }

  logForm() {
    console.log(this.registerForm.value);
  }
}
