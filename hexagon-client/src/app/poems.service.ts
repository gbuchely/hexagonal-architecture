import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ParameterService} from './parameter.service';

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  constructor(
    private http: HttpClient,
    private parameterService: ParameterService
  ) { }

  private hexagonalUrl = this.parameterService.mainRestAPIServerPath + '/api/';  // URL to web api

  getPoems(lang: string): Observable<any> {

    console.log('---->' + lang);
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + this.parameterService.access_token,
        Id : this.parameterService.id_token
      });
    return this.http.get<string[]>(this.hexagonalUrl + 'askForPoem?lang=' + lang, { headers, observe: 'response' });
  }

}
