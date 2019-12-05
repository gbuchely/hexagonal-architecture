import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Oauth2Service } from '../oauth2.service';
import { ParameterService } from '../parameter.service';

declare function parseJsonX(input: string): void;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private oauth2Service : Oauth2Service, private parameterService : ParameterService) { }

  ngOnInit() {
    
  }

  getAuth(): void {
    window.location.href = 
      this.parameterService.authUrl + '?' +
      'state=3e24b41e-02fd-4fc2-8edf-6dac3298738d&response_type=code&' + 
      'client_id=' + this.parameterService.client_id + '&' + 
      'redirect_uri=' + this.parameterService.redirect_uri + '&' + 
      'scope=' + this.parameterService.scope;
  }

  getToken(): void {
    
    const body = new HttpParams()
      .set('grant_type', this.parameterService.grant_type)
      .set('code', this.parameterService.access_code)
      .set('client_id', this.parameterService.client_id)
      .set('client_secret', this.parameterService.client_secret)
      .set('redirect_uri', this.parameterService.redirect_uri)
      .set('scope', this.parameterService.scope);

    this.oauth2Service
    .getToken(body)
    .subscribe(token => {
      console.log(token.body.access_token);
      this.parameterService.access_token = token.body.access_token;
      this.parameterService.expires_in = token.body.expires_in;
      this.parameterService.id_token = token.body.id_token;
      this.parameterService.refresh_token = token.body.refresh_token;
      this.parameterService.token_type = token.body.token_type;
    });
  }

  logout() : void {
    window.location.href = 
    'https://hexagonal.auth.us-east-1.amazoncognito.com/logout?' +
    'state=3e24b41e-02fd-4fc2-8edf-6dac3298738d&response_type=code&' + 
    'client_id=' + this.parameterService.client_id + '&' + 
    'redirect_uri=' + this.parameterService.redirect_uri + '&' + 
    'scope=' + this.parameterService.scope;
  }

}
