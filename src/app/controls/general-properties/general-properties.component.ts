import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-general-properties',
  templateUrl: './general-properties.component.html',
  styleUrls: ['./general-properties.component.css']
})
export class GeneralPropertiesComponent implements OnInit {

  @Input() properties: any;
  
  @Input() propertiesForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
