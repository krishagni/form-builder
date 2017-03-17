import { Injectable, Type, Component } from '@angular/core';

import { Textbox } from '../model/textbox';
import { TextboxPreviewComponent } from '../controls/textbox/preview/textbox-preview.component';
import { TextboxPropertiesComponent } from 
'../controls/textbox/properties/textbox-properties.component';
import { RadioButton } from '../model/radio-button';
import { RadioButtonPreviewComponent } from 
'../controls/radio-button/preview/radio-button-preview.component';
import { RadioButtonPropertiesComponent } from 
'../controls/radio-button/properties/radio-button-properties.component';

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
      previewComponent: TextboxPreviewComponent,
      propertiesComponent: TextboxPropertiesComponent
    },
    "radioButton": {
      modelClass: RadioButton,
      label: "Radio Button",
      iconClass: "fa fa-list",
      previewComponent: RadioButtonPreviewComponent,
      propertiesComponent: RadioButtonPropertiesComponent
    }
  };

  constructor() { }

  public register(type, paletteControl) {
    this.paletteControls[type] = paletteControl;
  }

  public deregister(type) {
    if (this.paletteControls.hasOwnProperty(type)) {
      delete this.paletteControls[type];
    }
  }

  public getPaletteControls() {
    var paletteControls: any[] = [];
    for (var key in this.paletteControls) {
      paletteControls.push(this.paletteControls[key]);
    }
    return paletteControls;
  }

  public getPreviewComponent(type): Type<Component>{
    if (this.paletteControls.hasOwnProperty(type)) {
      return this.paletteControls[type].previewComponent;
    }
  }

  public getPropertiesComponent(type): Type<Component>{
    if (this.paletteControls.hasOwnProperty(type)) {
      return this.paletteControls[type].propertiesComponent;
    }
  }

}
