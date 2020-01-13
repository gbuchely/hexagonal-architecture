import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {ParameterService} from '../../parameter.service';

@Injectable({
  providedIn: 'root'
})
export class HttpGenericService {

  constructor(
    public http: HttpClient,
    public parameterService: ParameterService,
    public messageService: MessageService
  ) { }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public log(message: string) {
    this.messageService.add(`PoemsService: ${message}`);
  }
}
