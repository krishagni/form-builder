import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Control, Textbox } from './model';
import { RegistryService, UtilService } from './providers';

@Component({
  selector: 'fb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form = {
    counter: 0,
    caption: "",
    name: "",
    controls: []
  };

  paletteControls: any[];

  selectedControl: Control;

  mainForm: FormGroup;

  mainFormControls: any;

  constructor(private registryService: RegistryService,
    private utilService: UtilService) {
  }

  ngOnInit() {
    this.paletteControls = this.registryService.getPaletteControls();
    let formMetadata = {
      "name":"demoForm",
      "caption":"Demo Form",
      "rows":[
      ]
    };
    this.constructForm(formMetadata);
    this.initForm();
  }

  private initForm() {
    this.mainForm = new FormGroup({});
    this.mainFormControls = this.getMainFormControls();
    if (this.mainFormControls) {
      for (let key in this.mainFormControls) {
        this.mainForm.addControl(
          this.mainFormControls[key].model.name,
          new FormControl(
            this.mainFormControls[key].model.value,
            this.mainFormControls[key].validations
          )
        );
      }
    }
  }

  private getMainFormControls() {
    return {
      caption: {
        model: new Textbox({
          type: "textbox",
          name: "caption",
          caption: "Display Name",
          value: this.form.caption,
          minLength: 5,
          maxLength: 25
        }),
        validations: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25)
        ],
        errorKeys: [
          "required",
          "minlength",
          "maxlength"
        ],
        errorMessages: {
          required: "Display Name is required",
          minlength: "Minimum 5 characters",
          maxlength: "Maximum 25 characters"
        }
      },
      name: {
        model: new Textbox({
          type: "textbox",
          name: "name",
          caption: "Form Name",
          value: this.form.name,
          minLength: 5,
          maxLength: 25
        }),
        validations: [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]*"),
          Validators.minLength(5),
          Validators.maxLength(25)
        ],
        errorKeys: [
          "required",
          "pattern",
          "minlength",
          "maxlength"
        ],
        errorMessages: {
          required: "Form Name is required",
          pattern: "Form Name must contain alphanumeric characters only",
          minlength: "Minimum 5 characters",
          maxlength: "Maximum 25 characters"
        }
      }
    };
  }

  private onControlSelect(selectedControl) {
    this.selectedControl = selectedControl;
  }

  private writeForm(): any {
    Object.assign(this.form, this.mainForm.value);
    let formMetadata = {};
    formMetadata["caption"] = this.form.caption;
    formMetadata["name"] = this.form.name;
    formMetadata["rows"] = [];
    this.form.controls.forEach(controlRow => {
      let row = [];
      controlRow.forEach(control => {
        row.push(control.serialize());
      });
      formMetadata["rows"].push(row);
    });
    console.log(formMetadata);
  }

  private constructForm(formMetadata): any {
    this.form.caption = formMetadata.caption;
    this.form.name = formMetadata.name;
    formMetadata.rows.forEach( row => {
      let controlRow = [];
      row.forEach( controlMetadata => {
        let parsedControlName = (controlMetadata.name.match(/(\d+)$/));
        let counter = parsedControlName != null? parseInt(parsedControlName[0], 10): 0;
        if (counter > this.form.counter) {
          this.form.counter = counter;
        }
        controlRow.push(this.utilService.createControl(controlMetadata));
      });
      this.form.controls.push(controlRow);
    });
  }
  
}
