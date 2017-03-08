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
          defaultValue: control.caption
        }),
        validations: [Validators.required]
      },
      {
        property: new Textbox({
          type: "textbox",
          componentType: TextboxComponent,
          name: "toolTip",
          caption: "ToolTip",
          defaultValue: control.toolTip
        }),
        validations: []
      },
      {
        property: new Textbox({
          type: "textbox",
          componentType: TextboxComponent,
          name: "udn",
          caption: "Attribute Name",
          defaultValue: control.udn
        }),
        validations: [Validators.required]
      }
    ];
  }

}