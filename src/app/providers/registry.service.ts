import { Injectable, Type, Component } from '@angular/core';

import { Textbox, RadioButton, Dropdown } from '../model';
import { TextboxComponent, TextboxPropsComponent } from '../controls/textbox';
import { RadioButtonComponent, RadioButtonPropsComponent } from '../controls/radio-button';
import { DropdownComponent, DropdownPropsComponent } from '../controls/dropdown';

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
      label: "Textbox",
      iconClass: "fa fa-text-width",
      controlComponent: TextboxComponent,
      propsComponent: TextboxPropsComponent
    },
    "radioButton": {
      modelClass: RadioButton,
      label: "Radio Button",
      iconClass: "fa fa-list",
      controlComponent: RadioButtonComponent,
      propsComponent: RadioButtonPropsComponent
    },
    "dropdown": {
      modelClass: Dropdown,
      label: "Drop Down",
      iconClass: "fa fa-caret-down",
      controlComponent: DropdownComponent,
      propsComponent: DropdownPropsComponent
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
