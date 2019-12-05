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

  private verses : String[];
  private langs : Lang[] = [{id: "en", desc: "English"}, {id: "de", desc: "Deutch"}];

  constructor(private poemsService : PoemsService) { }

  ngOnInit() {
    
  }

  getPoems(lang : String): void {
    console.log('Lang >> ' + lang)
    this.poemsService.getPoems(lang)
      .subscribe(poemsRet => this.verses = poemsRet.body);  
  }

  mainSubject() : void {
    this.poemsService.getMainSubject()
    .subscribe(subject => this.verses = subject.body); 
  }

  subsidiary() : void {
    this.poemsService.getSubsidiary()
    .subscribe(subject => this.verses = subject.body); 
  }

  admin() : void {
    this.poemsService.getAdmin()
    .subscribe(subject => this.verses = subject.body); 
  }

  identity() : void {
    this.poemsService.getIdentity()
    .subscribe(subject => this.verses = subject.body); 
  }

}
