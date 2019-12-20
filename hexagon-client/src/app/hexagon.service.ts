import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ParameterService} from './parameter.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HexagonService {

  constructor(
    private http: HttpClient,
    private parameterService: ParameterService
  ) { }

  private hexagonalUrl = this.parameterService.mainRestAPIServerPath + '/api/';  // URL to web api
  private hexagonaSubsidiarylUrl = this.parameterService.subsidiaryRestAPIServerPath + '/api/';
  private adminUrl = this.parameterService.mainRestAPIServerPath + '/admin/';
  private adminSubsidiarylUrl = this.parameterService.subsidiaryRestAPIServerPath + '/admin/';

  getIdentity(): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<string[]>(this.hexagonalUrl, { headers, observe: 'response' });
  }

  getIdentityId(): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.parameterService.id_token
      });
    return this.http.get<string[]>(this.hexagonalUrl, { headers, observe: 'response' });
  }

  getSubsidiary(): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<string[]>(this.hexagonalUrl + 'subsidiary', { headers, observe: 'response' });
  }

  getIdentitySubsidiary(): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<string[]>(this.hexagonaSubsidiarylUrl, { headers, observe: 'response' });
  }

  getIdentitySubsidiaryId(): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.parameterService.id_token
      });
    return this.http.get<string[]>(this.hexagonaSubsidiarylUrl, { headers, observe: 'response' });
  }

  getAdmin(): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.parameterService.access_token
      });
    return this.http.get<string[]>(this.adminUrl, { headers, observe: 'response' });
  }

  getAdminId(): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.parameterService.id_token
      });
    return this.http.get<string[]>(this.adminUrl, { headers, observe: 'response' });
  }

  getAdminSubsidiaryId(): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.parameterService.id_token
      });
    return this.http.get<string[]>(this.adminSubsidiarylUrl, { headers, observe: 'response' });
  }

}
