import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: ` 
      <ul>
        <li *ngFor="let person of persons">
          {{ getFullName(person) }} - {{person.birthDate | date: "MM/dd/yyyy" }}
        </li>
      </ul>`
})
export class NgforComponent {

  public persons = [
    { "firstName": "Bradley", "lastName": "Farmer", birthDate: "1977-08-30" },
    { "firstName": "Cathryn", "lastName": "Maldonado", birthDate: "1954-02-10"},
    { "firstName": "John","lastName": "Cooper", birthDate: "1982-12-06" },
    { "firstName": "Reid", "lastName": "Campos" },
    { "firstName": "Iva", "lastName": "Briggs" },
    { "firstName": "Vera", "lastName": "Byers" }
  ];

  getFullName(person) {
    return person.firstName + " " + person.lastName;
  }

}
