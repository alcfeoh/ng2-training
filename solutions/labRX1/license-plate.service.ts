import { Injectable } from '@angular/core';
import {LicensePlate} from './license-plate';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  constructor() { }

  getList(): Observable<LicensePlate[]> {
    return of([
      {
        "_id": "5a0c8ab22d8dc1f7fa170c9d",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/GA.jpg",
        "title": "2008 Georgia license plate",
        "price": 8,
        "year": 2008,
        "state": "GA",
        "description": "Ad occaecat ex nisi reprehenderit dolore esse. Excepteur laborum fugiat sint tempor et in magna labore quis exercitation consequat nulla tempor occaecat. Sit cillum deserunt eiusmod proident labore mollit. Cupidatat do ullamco ipsum id nisi mollit pariatur nulla dolor sunt et nostrud qui.\r\n"
      },
      {
        "_id": "5a0c8ab2fea86aa6a3180710",
        "onSale": true,
        "picture": "http://angulartraining.com/plates/NJ.jpg",
        "title": "2015 New Jersey license plate",
        "price": 11,
        "year": 2015,
        "state": "NJ",
        "description": "A beautiful license plate from the Garden State. Year is 2015. \r\n"
      },
      {
        "_id": "5a0c8ab27aecc7e77f4d73f0",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/CA.png",
        "title": "2013 California My Tahoe license plate",
        "price": 9,
        "year": 2013,
        "state": "CA",
        "description": "Sunt irure nisi excepteur in ea consequat ad aliqua. Lorem duis in duis nisi sit. Cillum eiusmod ipsum mollit veniam consectetur ex eiusmod nisi laborum amet anim mollit non nulla. Lorem ea est exercitation nostrud consectetur officia laborum fugiat sint. Nostrud consequat magna officia minim et aute nostrud.\r\n"
      },
      {
        "_id": "5a0c8ab2e0ecc5ad7160530e",
        "onSale": true,
        "picture": "http://angulartraining.com/plates/CO.jpg",
        "title": "2010 Colorado license plate",
        "price": 5,
        "year": 2010,
        "state": "CO",
        "description": "Labore ea eu labore voluptate velit elit aute est velit consequat fugiat labore esse adipisicing. Laboris eiusmod eiusmod veniam cillum velit consectetur dolore cillum eiusmod qui ipsum. Consequat ullamco voluptate commodo aliquip elit dolor incididunt proident nostrud pariatur cillum excepteur Lorem adipisicing.\r\n"
      },
      {
        "_id": "5a0c8ab244b4ae424ec5ecae",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/FL.png",
        "title": "2017 Florida license plate",
        "price": 10,
        "year": 2017,
        "state": "FL",
        "description": "In aliquip consectetur pariatur sunt nulla. Labore consequat proident magna est incididunt ex Lorem. Esse fugiat laborum quis ullamco. Duis duis nulla adipisicing aliqua exercitation nulla mollit commodo quis nulla enim.\r\n"
      },
      {
        "_id": "5a0c8ab26a89ddc39aeb44bf",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/UT.jpg",
        "title": "2014 Utah license plate",
        "price": 10,
        "year": 2014,
        "state": "UT",
        "description": "Nisi ad commodo sint Lorem. Nulla laboris ad aute dolore do incididunt laborum nulla adipisicing anim pariatur et. Officia veniam laboris pariatur et irure sunt amet eiusmod nulla excepteur. Id nostrud tempor quis ipsum labore sunt mollit occaecat eiusmod. Laboris velit anim veniam proident minim magna Lorem nisi qui est. Ut ea id laborum cupidatat aliqua ut Lorem.\r\n"
      },
      {
        "_id": "5a0c8ab230637b3ea41203e9",
        "onSale": true,
        "picture": "http://angulartraining.com/plates/NY.jpg",
        "title": "2016 New York license plate",
        "price": 9,
        "year": 2016,
        "state": "NY",
        "description": "Et dolore ut id non cupidatat reprehenderit exercitation laboris occaecat aliquip ut ipsum minim reprehenderit. Dolor pariatur quis non veniam id pariatur irure ad reprehenderit reprehenderit eiusmod. Reprehenderit esse non nulla sunt enim incididunt fugiat minim.\r\n"
      },
      {
        "_id": "5a0c8ab21b3a613ec15a0073",
        "onSale": false,
        "picture": "http://angulartraining.com/plates/PA.jpg",
        "title": "2007 Pennsylvania license plate",
        "price": 11,
        "year": 2007,
        "state": "PA",
        "description": "Velit minim aute minim irure magna cupidatat est reprehenderit. Aliqua Lorem nostrud aliquip non voluptate qui fugiat. Amet pariatur proident cupidatat minim in laborum sit esse. Tempor eu eu elit cupidatat eu elit in aliqua eu culpa ut consequat culpa minim. Ut labore sit anim ea magna occaecat sunt laboris quis reprehenderit. Amet pariatur excepteur et ex et ex ad laboris aute nulla dolor ut nostrud.\r\n"
      }
    ]);
  }
}
