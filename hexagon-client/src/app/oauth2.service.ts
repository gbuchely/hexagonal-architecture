import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParameterService } from './parameter.service';

@Injectable({
  providedIn: 'root'
})
export class Oauth2Service {

  constructor(
    private http: HttpClient,
    private parameterService : ParameterService
  ) { }

  getToken (body: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post<any>(this.parameterService.tokenUrl, body.toString(), { headers, observe: 'response' });
  }

  logout () {
    console.log('.........................');
    return this.http.get<any>(
      this.parameterService.logoutUrl + 
      '?client_id=' + this.parameterService.client_id + 
      '&logout_uri=' + this.parameterService.logout_uri
    );
  }

}
