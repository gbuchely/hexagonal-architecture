import { Component, OnInit } from '@angular/core';
import {HexagonService} from '../hexagon.service';

@Component({
  selector: 'app-hexagon-api-sec',
  templateUrl: './hexagon-api-sec.component.html',
  styleUrls: ['./hexagon-api-sec.component.css']
})
export class HexagonApiSecComponent implements OnInit {

  private out: string[];
  constructor(
    private hexagonService: HexagonService
  ) { }

  ngOnInit() {
  }

  clear(): void {
    this.out =  [];
  }

  addToArray(input: string[]): void {
    this.out = input;
  }


  identity(): void {
    this.clear();
    this.hexagonService.getIdentity()
      .subscribe(subject => this.addToArray(subject.body));
  }

  identityId(): void {
    this.clear();
    this.hexagonService.getIdentityId()
      .subscribe(subject => this.addToArray(subject.body));
  }

  subsidiary(): void {
    this.clear();
    this.hexagonService.getSubsidiary()
      .subscribe(subject => this.addToArray(subject.body));
  }

  identitySubsidiary(): void {
    this.clear();
    this.hexagonService.getIdentitySubsidiary()
      .subscribe(subject => this.addToArray(subject.body));
  }

  identitySubsidiaryId(): void {
    this.clear();
    this.hexagonService.getIdentitySubsidiaryId()
      .subscribe(subject => this.addToArray(subject.body));
  }

  admin(): void {
    this.clear();
    this.hexagonService.getAdmin()
      .subscribe(subject => this.addToArray(subject.body));
  }

  adminId(): void {
    this.clear();
    this.hexagonService.getAdminId()
      .subscribe(subject => this.addToArray(subject.body));
  }

  adminSubsidiaryId(): void {
    this.clear();
    this.hexagonService.getAdminSubsidiaryId()
      .subscribe(subject => this.addToArray(subject.body));
  }

}
