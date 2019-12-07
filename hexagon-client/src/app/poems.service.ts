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

  private hexagonalUrl = this.parameterService.mainRestAPIServerPath + '/api/';  // URL to web api
  private hexagonaSubsidiarylUrl = this.parameterService.subsidiaryRestAPIServerPath + '/api/';
  private adminUrl = this.parameterService.mainRestAPIServerPath + '/admin/';
  private adminSubsidiarylUrl = this.parameterService.subsidiaryRestAPIServerPath + '/admin/';

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

  getIdentity(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<String[]>(this.hexagonalUrl, { headers, observe: 'response' });
  }

  getIdentityId(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.id_token
      });
    return this.http.get<String[]>(this.hexagonalUrl, { headers, observe: 'response' });
  }

  getSubsidiary(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<String[]>(this.hexagonalUrl + 'subsidiary', { headers, observe: 'response' });
  }

  getIdentitySubsidiary(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<String[]>(this.hexagonaSubsidiarylUrl, { headers, observe: 'response' });
  }

  getIdentitySubsidiaryId(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.id_token
      });
    return this.http.get<String[]>(this.hexagonaSubsidiarylUrl, { headers, observe: 'response' });
  }

  getAdmin(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<String[]>(this.adminUrl, { headers, observe: 'response' });
  }

  getAdminId(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.id_token
      });
    return this.http.get<String[]>(this.adminUrl, { headers, observe: 'response' });
  }

  getAdminSubsidiaryId(): Observable<any> {
    const headers = new HttpHeaders(
      { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.parameterService.id_token
      });
    return this.http.get<String[]>(this.adminSubsidiarylUrl, { headers, observe: 'response' });
  }

}
