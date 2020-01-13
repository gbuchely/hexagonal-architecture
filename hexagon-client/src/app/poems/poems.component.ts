import {Component, OnInit} from '@angular/core';

import {PoemsService} from '../poems.service';
import {Lang} from '../doms';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {

  private verses: string[];
  private langs: Lang[] = [{id: 'en', desc: 'English'}, {id: 'de', desc: 'Deutch'}];

  constructor(private poemsService: PoemsService) { }

  ngOnInit() {
  }

  clear(): void {
    this.verses =  [];
  }

  addToArray(input: string[]): void {
    this.verses = input;
  }

  getPoems(lang: string): void {
    console.log('Lang >> ' + lang)
    this.poemsService.getPoemsJwt(lang)
      .subscribe(poemsRet => this.verses = poemsRet.body);
  }

}
