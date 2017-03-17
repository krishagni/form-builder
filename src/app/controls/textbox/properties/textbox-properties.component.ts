import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-textbox-properties',
  templateUrl: './textbox-properties.component.html',
  styleUrls: ['./textbox-properties.component.css']
})
export class TextboxPropertiesComponent implements OnInit {

  @Input() properties: any;

  @Output() onSave = new EventEmitter<any>();

  propertiesForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.propertiesForm = new FormGroup({});
    if (this.properties) {
      for (var key in this.properties) {
        this.propertiesForm.addControl(
          this.properties[key].model.name,
          new FormControl(
            this.properties[key].model.value,
            this.properties[key].validations
          )
        );
      }
    }
  }

  private onSubmit() {
    this.onSave.emit(this.propertiesForm.value);
  }

}
