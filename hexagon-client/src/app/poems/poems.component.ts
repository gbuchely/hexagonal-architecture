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

  clear(): void {
    this.verses =  [];
  }

  addToArray(input : String[]) : void {
    this.verses = input; 
  }

  getPoems(lang : String): void {
    console.log('Lang >> ' + lang)
    this.poemsService.getPoems(lang)
      .subscribe(poemsRet => this.verses = poemsRet.body);  
  }

  identity() : void {
    this.clear();
    this.poemsService.getIdentity()
    .subscribe(subject => this.addToArray(subject.body)); 
  }

  identityId() : void {
    this.clear();
    this.poemsService.getIdentityId()
    .subscribe(subject => this.addToArray(subject.body)); 
  }

  subsidiary() : void {
    this.clear();
    this.poemsService.getSubsidiary()
    .subscribe(subject => this.addToArray(subject.body)); 
  }

  identitySubsidiary() : void {
    this.clear();
    this.poemsService.getIdentitySubsidiary()
    .subscribe(subject => this.addToArray(subject.body)); 
  }

  identitySubsidiaryId() : void {
    this.clear();
    this.poemsService.getIdentitySubsidiaryId()
    .subscribe(subject => this.addToArray(subject.body)); 
  }

  admin() : void {
    this.clear();
    this.poemsService.getAdmin()
    .subscribe(subject => this.addToArray(subject.body)); 
  }

  adminId() : void {
    this.clear();
    this.poemsService.getAdminId()
    .subscribe(subject => this.addToArray(subject.body)); 
  }

  adminSubsidiaryId() : void {
    this.clear();
    this.poemsService.getAdminSubsidiaryId()
    .subscribe(subject => this.addToArray(subject.body)); 
  }

}
