import { Component, OnInit } from '@angular/core';
import {Oauth2Service} from '../auth/oauth2.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private user = 'XXXX';
  private rol = 'XXXX';

  constructor(
    private auth: Oauth2Service
  ) { }

  ngOnInit() {
    this.user = this.auth.hasUsername();
    this.rol = this.auth.hasRoles();
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
  }

  username() {
    return this.auth.hasUsername();
  }

  roles() {
    return this.auth.hasRoles();
  }

}
