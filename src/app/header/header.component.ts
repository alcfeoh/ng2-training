import { Component, OnInit } from '@angular/core';
import {LoginService} from "../router/login/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public loginService: LoginService) { }


}
