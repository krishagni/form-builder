import { Injectable } from '@angular/core';

import { Textbox } from '../model/textbox';
import { RadioButton } from '../model/radio-button';

@Injectable()
export class RegistryService {

  /*
    For now I have added two controls here by default.
    You can add new controls or remove any controls by
    using register & deregister methods of this service.
  */
  private paletteControls: any = {
    "textbox": {
      modelClass: Textbox,
      label: "Textbox",
      iconClass: "fa fa-text-width"
    },
    "radioButton": {
      modelClass: RadioButton,
      label: "Radio Button",
      iconClass: "fa fa-list"
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

}
