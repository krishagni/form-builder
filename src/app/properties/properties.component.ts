import { Component, Input, OnInit } from '@angular/core';

import { Control } from '../model';

@Component({
  selector: 'fb-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  @Input() control: Control;

  constructor() {
  }

  ngOnInit() {
  }
  
}
