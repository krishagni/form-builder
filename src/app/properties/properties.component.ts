import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Control } from '../model/control';

@Component({
  selector: 'fb-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit, OnChanges {

  @Input() selectedControl: Control;

  properties: any[] = [];

  propertiesForm: FormGroup;

  constructor() {
  }

  initForm() {
    this.propertiesForm = new FormGroup({});
    if (this.selectedControl) {
      this.properties = this.selectedControl.getProperties();
      this.properties.forEach(property => {
        this.propertiesForm.addControl(
          property.property.name,
          new FormControl(
            property.property.value,
            property.validations
          )
        );
      });
    }
  }

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges() {
    this.initForm();
  }

  onSubmit() {
    Object.assign(this.selectedControl, this.propertiesForm.value);
  }
  
}
