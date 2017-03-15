import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  template: ` 
      <ul>
        <li *ngFor="let person of persons">
          {{ getDisplayName(person)  }}
        </li>
      </ul>`
})
export class NgforComponent {

  public persons = [
    {
      "_id": "58c8684e9e416245ffb60088",
      "name": "Edith Eaton",
      "company": "DADABASE",
      "email": "editheaton@dadabase.com",
      "phone": "+1 (854) 486-2088",
      "address": "280 Florence Avenue, Salix, Alaska, 3036",
      "birthDate": new Date(1982, 4, 6)
    },
    {
      "_id": "58c8684e854286bcc54c362f",
      "name": "Tami Curry",
      "company": "VISUALIX",
      "email": "tamicurry@visualix.com",
      "phone": "+1 (926) 441-3832",
      "address": "125 Wilson Street, Eden, Idaho, 5316",
      "birthDate": new Date(1972, 7, 9)
    },
    {
      "_id": "58c8684e981ec7408af79acc",
      "name": "Deloris Shaffer",
      "company": "GOLOGY",
      "email": "delorisshaffer@gology.com",
      "phone": "+1 (811) 597-2680",
      "address": "384 Joval Court, Whipholt, Federated States Of Micronesia, 6462",
      "birthDate": new Date(1982, 5, 21)
    },
    {
      "_id": "58c8684ed5a401d6731ea194",
      "name": "Everett Elliott",
      "company": "XUMONK",
      "email": "everettelliott@xumonk.com",
      "phone": "+1 (934) 506-3386",
      "address": "771 Hamilton Walk, Abiquiu, Maryland, 5911",
      "birthDate": new Date(1980, 4, 6)
    },
    {
      "_id": "58c8684ead1a8fc20b4a6afa",
      "name": "Neva Woods",
      "company": "COWTOWN",
      "email": "nevawoods@cowtown.com",
      "phone": "+1 (822) 470-2733",
      "address": "678 Wyona Street, Bendon, South Dakota, 2553",
      "birthDate": new Date(1982, 10, 19)
    },
    {
      "_id": "58c8684eaa617b3c3a3ccf65",
      "name": "Knowles Hartman",
      "company": "GEEKFARM",
      "email": "knowleshartman@geekfarm.com",
      "phone": "+1 (997) 471-2723",
      "address": "255 Hinsdale Street, Vaughn, Guam, 8794",
      "birthDate": new Date(1965, 1, 4)
    }
  ];

  getDisplayName(person) {
    return person.name + " - Employer: " + person.company;
  }

}
