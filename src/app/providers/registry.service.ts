import { MultiCheckboxPropsComponent } from './../controls/multi-checkbox/multi-checkbox-props.component';
import { MultiCheckboxComponent } from './../controls/multi-checkbox/multi-checkbox.component';
import { Injectable, Type, Component } from '@angular/core';

import { Textbox, RadioButton, Dropdown, MultiSelect, Date, MultiCheckbox, Number, 
  SingleCheckbox, Textarea, SingleSelect, FileUpload } from '../model';
import { TextboxComponent, TextboxPropsComponent } from '../controls/textbox';
import { RadioButtonComponent, RadioButtonPropsComponent } from '../controls/radio-button';
import { DropdownComponent, DropdownPropsComponent } from '../controls/dropdown';
import { MultiSelectComponent, MultiSelectPropsComponent } from '../controls/multi-select';
import { DateComponent, DatePropsComponent } from '../controls/date';
import { SingleCheckboxComponent, SingleCheckboxPropsComponent } from '../controls/single-checkbox';
import { NumberComponent, NumberPropsComponent } from '../controls/number';
import { TextareaComponent, TextareaPropsComponent } from '../controls/textarea';
import { SingleSelectComponent, SingleSelectPropsComponent } from '../controls/single-select';
import { FileUploadComponent, FileUploadPropsComponent } from '../controls/file-upload';

@Injectable()
export class RegistryService {

  /*
    For now I have added two controls here by default.
    You can add new controls or remove any controls by
    using register & deregister methods of this service.
  */
  paletteControls: any = {
    "textbox": {
      modelClass: Textbox,
      label: "Single Line Text",
      iconClass: "fa fa-text-width",
      controlComponent: TextboxComponent,
      propsComponent: TextboxPropsComponent
    },
    "radioButton": {
      modelClass: RadioButton,
      label: "Radio Buttons",
      iconClass: "fa fa-dot-circle-o",
      controlComponent: RadioButtonComponent,
      propsComponent: RadioButtonPropsComponent
    },
    "singleSelect": {
      modelClass: SingleSelect,
      label: "Dropdown",
      iconClass: "fa fa-caret-down",
      controlComponent: SingleSelectComponent,
      propsComponent: SingleSelectPropsComponent
    },
    "multiSelect": {
      modelClass: MultiSelect,
      label: "Multiple Select",
      iconClass: "fa fa-list",
      controlComponent: MultiSelectComponent,
      propsComponent: MultiSelectPropsComponent
    },
    "date": {
      modelClass: Date,
      label: "Date",
      iconClass: "fa fa-calendar",
      controlComponent: DateComponent,
      propsComponent: DatePropsComponent
    },
    "multiCheckbox": {
      modelClass: MultiCheckbox,
      label: "Checkboxes",
      iconClass: "fa fa-list",
      controlComponent: MultiCheckboxComponent,
      propsComponent: MultiCheckboxPropsComponent
    },
    "number": {
      modelClass: Number,
      label: "Number",
      iconClass: "fa fa-sort-numeric-asc",
      controlComponent: NumberComponent,
      propsComponent: NumberPropsComponent
    },
    "singleCheckbox": {
      modelClass: SingleCheckbox,
      label: "SingleCheckbox",
      iconClass: "fa fa-check-square-o",
      controlComponent: SingleCheckboxComponent,
      propsComponent: SingleCheckboxPropsComponent
    },
    "textarea": {
      modelClass: Textarea,
      label: "Text Area",
      iconClass: "fa fa-paragraph",
      controlComponent: TextareaComponent,
      propsComponent: TextareaPropsComponent
    },
    "fileUpload": {
      modelClass: FileUpload,
      label: "File Upload",
      iconClass: "fa fa-file-text",
      controlComponent: FileUploadComponent,
      propsComponent: FileUploadPropsComponent
    }
  };

  constructor() {
  }

  public register(type, paletteControl) {
    this.paletteControls[type] = paletteControl;
  }

  public deregister(type) {
    if (this.paletteControls.hasOwnProperty(type)) {
      delete this.paletteControls[type];
    }
  }

  public getPaletteControls() {
    let paletteControls: any[] = [];
    for (let key in this.paletteControls) {
      paletteControls.push(this.paletteControls[key]);
    }
    return paletteControls;
  }

  public getControlComponent(type): Type<Component>{
    if (this.paletteControls.hasOwnProperty(type)) {
      return this.paletteControls[type].controlComponent;
    }
  }

  public getPropsComponent(type): Type<Component>{
    if (this.paletteControls.hasOwnProperty(type)) {
      return this.paletteControls[type].propsComponent;
    }
  }

  public getModel(type) {
    if (this.paletteControls.hasOwnProperty(type)) {
      return this.paletteControls[type].modelClass;
    }
  }

}
