import { Component, OnInit } from '@angular/core';
import { ParameterService } from '../../../parameter.service';
import { Router } from "@angular/router";

declare function getCode(input: string): void;

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(
    private parameterService : ParameterService,
    private router: Router
  ) { }  

  ngOnInit() {
    var callback =  window.location.href;
    var code = getCode(callback); // Function call
    console.log('CODE : ' + code);
    this.parameterService.access_code = code;
    this.router.navigate(['/login'])
  }

}
