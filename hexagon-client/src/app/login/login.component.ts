import {Component, OnInit} from '@angular/core';
import {Oauth2Service} from '../shared/auth/oauth2.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oauth2Service: Oauth2Service) { }

  ngOnInit() {

  }

  getAuth(): void {
    this.oauth2Service.getAuth();
  }

  getToken(): void {
    this.oauth2Service.getToken();
  }

  logout(): void {
    this.oauth2Service.logout();
  }

}
