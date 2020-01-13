import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ParameterService} from './parameter.service';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from './shared/service/message.service';
import {HttpGenericService} from './shared/service/http-generic.service';

@Injectable({
  providedIn: 'root'
})
export class PoemsService extends HttpGenericService {

  constructor(
    public http: HttpClient,
    public parameterService: ParameterService,
    public messageService: MessageService
  ) {
    super(http, parameterService, messageService);
  }

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

  getPoemsJwt(lang: string): Observable<any> {

    console.log('---->' + lang);
    const term = 'askForPoem?lang=';
    return this.http.get<string[]>(this.hexagonalUrl + term + lang, {observe: 'response'})
      .pipe(
        tap(_ => this.log(`found heroes matching "${term}"`)),
        catchError(this.handleError<any>('searchHeroes', []))
      );
  }
}
