import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ParameterService } from '../../parameter.service';
import { JwtHelperService } from '@auth0/angular-jwt';

declare function stringifyJson(input: string): void;
declare function parseJson(input: string): void;
declare function getRoles(input: string): void;
declare function getUsername(input: string): void;

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {

  private loggedIn = false;
  private username: string;
  private roles: string;

  constructor(
    private http: HttpClient,
    private parameterService: ParameterService,
    private jwtHelperService: JwtHelperService
  ) { }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  hasUsername() {
    return this.username;
  }

  hasRoles() {
    return this.roles;
  }

  setUsername(username) {
    this.username = username;
  }

  setRoles(roles) {
    this.roles = roles;
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

    this.getTokenFromService(body)
      .subscribe(token => {
        console.log('ACCESS_TOKEN:: \n' + token.body.access_token);
        console.log('ID_TOKEN:: \n' + token.body.id_token);

        this.setUserSession(token);

        this.parameterService.access_token = token.body.access_token;
        this.parameterService.expires_in = token.body.expires_in;
        this.parameterService.id_token = token.body.id_token;
        this.parameterService.refresh_token = token.body.refresh_token;
        this.parameterService.token_type = token.body.token_type;
      });
  }

  getTokenFromService(body: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post<any>(this.parameterService.tokenUrl, body.toString(), { headers, observe: 'response' });
  }

  setUserSession(token: any): void {
    this.loggedIn = true;
    const sJson = this.jwtHelperService.decodeToken(token.body.id_token);
    this.setUsername(getUsername(sJson));
    this.setRoles(getRoles(sJson));
  }

  logout(): void {
    this.loggedIn = false;
    window.location.href =
      this.parameterService.logoutUrl + '?' +
      'state=3e24b41e-02fd-4fc2-8edf-6dac3298738d&response_type=code&' +
      'client_id=' + this.parameterService.client_id + '&' +
      'redirect_uri=' + this.parameterService.redirect_uri + '&' +
      'scope=' + this.parameterService.scope;
  }
}
