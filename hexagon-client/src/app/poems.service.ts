import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { POEMS } from './mock-poems'

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  constructor(
    private http: HttpClient
  ) { }

  private hexagonalUrl = 'http://localhost:8080/api/askForPoem';  // URL to web api

  getPoems(lang : String): Observable<String[]> {
    //return of (POEMS)
    console.log('---->' + lang);
    return this.http.get<String[]>(this.hexagonalUrl + '?lang=' + lang);
  }
}
