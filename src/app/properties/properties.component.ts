import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from
  '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule }
  from '@angular/forms';

@Component({
  selector: 'fb-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit, OnChanges {

  @Input() selectedControl: any;

  @Output() selectedControlChange = new EventEmitter<any>();

  properties: any[] = [];

  propertiesForm: FormGroup;

  constructor() {
  }

  getProperties() {
    this.properties = this.selectedControl.getProperties();
    this.propertiesForm = new FormGroup({});
    for (var i = 0; i < this.properties.length; i++) {
      this.propertiesForm.addControl(this.properties[i].property.name, new FormControl(this.properties[i].property.defaultValue, this.properties[i]
      .validations));
    }
  }

  ngOnInit() {
    if (this.selectedControl) {
      this.getProperties();
    }
  }

  ngOnChanges() {
    if (this.selectedControl) {
      this.getProperties();
    }
  }

  onSubmit() {
    for (var key in this.propertiesForm.controls) {
      this.selectedControl[key] = this.propertiesForm.controls[key].value;
    }
  }
  
}
