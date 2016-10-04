import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: ` 
      <ul>
        <li *ngFor="let person of persons; let i = #index">
          {{ i + " - " +getFullName(person) }}
        </li>
      </ul>`
})
export class NgforComponent {

  public persons = [
    { "firstName": "Bradley", "lastName": "Farmer" },
    { "firstName": "Cathryn", "lastName": "Maldonado"},
    { "firstName": "John","lastName": "Cooper" },
    { "firstName": "Reid", "lastName": "Campos" },
    { "firstName": "Iva", "lastName": "Briggs" },
    { "firstName": "Vera", "lastName": "Byers" }
  ];

  getFullName(person) {
    return person.firstName + " " + person.lastName;
  }

}
