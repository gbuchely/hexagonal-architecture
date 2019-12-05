import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParameterService } from './parameter.service';

import { POEMS } from './mock-poems'

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  constructor(
    private http: HttpClient,
    private parameterService : ParameterService
  ) { }

  private hexagonalUrl = 'http://localhost:8080/api/';  // URL to web api
  private adminUrl = 'http://localhost:8080/admin/';

  getPoems(lang : String): Observable<any> {
    //return of (POEMS)
    console.log('---->' + lang);
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.access_token,
        'Id' : this.parameterService.id_token
      });
    return this.http.get<String[]>(this.hexagonalUrl + 'askForPoem?lang=' + lang, { headers, observe: 'response' });
  }

  getMainSubject(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<String[]>(this.hexagonalUrl + 'pri', { headers, observe: 'response' });
  }

  getSubsidiary(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<String[]>(this.hexagonalUrl + 'sub', { headers, observe: 'response' });
  }

  getAdmin(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<String[]>(this.adminUrl, { headers, observe: 'response' });
  }

  getIdentity(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<String[]>(this.hexagonalUrl, { headers, observe: 'response' });
  }

}
