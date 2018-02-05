import { Component } from '@angular/core';
import {LoginService} from '../router/login/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private loginService: LoginService) { }

}
