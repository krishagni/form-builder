import { Validators } from '@angular/forms';

import { Textbox } from './textbox';
import { TextboxComponent } from '../controls/textbox/textbox.component';

export class GeneralProperties {

  public static getGeneralProperties(control): any[] {
    return [
      {
        property: new Textbox({
          type: "textbox",
          componentType: TextboxComponent,
          name: "caption",
          caption: "Field Name",
          value: control.caption
        }),
        validations: [Validators.required]
      },
      {
        property: new Textbox({
          type: "textbox",
          componentType: TextboxComponent,
          name: "toolTip",
          caption: "ToolTip",
          value: control.toolTip
        }),
        validations: []
      },
      {
        property: new Textbox({
          type: "textbox",
          componentType: TextboxComponent,
          name: "udn",
          caption: "Attribute Name",
          value: control.udn
        }),
        validations: [Validators.required]
      },
      {
        property: new Textbox({
          type: "textbox",
          componentType: TextboxComponent,
          name: "width",
          caption: "Width",
          value: control.width
        }),
        validations: []
      }
    ];
  }

}