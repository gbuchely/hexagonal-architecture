import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { PoemsService } from '../poems.service';
import { Poem, Lang } from '../doms';


@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {

  private verses : string[];
  private langs : Lang[] = [{id: "en", desc: "English"}, {id: "de", desc: "Deutch"}];

  constructor(private poemsService : PoemsService) { }

  ngOnInit() {
    
  }

  getPoems(lang : String): void {
    console.log('Lang >> ' + lang)
    this.poemsService.getPoems(lang)
      .subscribe(poemsRet => this.verses = poemsRet);  
  }

}
