import { Component, OnInit } from '@angular/core';
import { ParameterService } from '../parameter.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private parameterService : ParameterService) { }

  ngOnInit() {
  }

}
