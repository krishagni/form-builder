import { Validators } from '@angular/forms';

import { Textbox } from './textbox';

export class GeneralProperties {

  public static getGeneralProperties(control): any {
    return {
      caption: {
        model: new Textbox({
          type: "textbox",
          name: "caption",
          caption: "Field Name",
          value: control.caption
        }),
        validations: [Validators.required]
      },
      toolTip: {
        model: new Textbox({
          type: "textbox",
          name: "toolTip",
          caption: "ToolTip",
          value: control.toolTip
        }),
        validations: []
      },
      udn: {
        model: new Textbox({
          type: "textbox",
          name: "udn",
          caption: "Attribute Name",
          value: control.udn
        }),
        validations: [Validators.required]
      },
      width: {
        model: new Textbox({
          type: "textbox",
          name: "width",
          caption: "Width",
          value: control.width
        }),
        validations: []
      }
    };
  }

}