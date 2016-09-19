import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: ` 
      <ul>
        <li *ngFor="let person of persons" >
          <span *ngIf="person.firstName.length > 3">
            {{ getFullName(person) }}
          </span>
        </li>
      </ul>`
})
export class NgifComponent{

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
