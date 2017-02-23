import { Validators } from '@angular/forms';
import { Textbox } from './textbox';

export abstract class Control {
  label: string;
  iconClass: string;
  type: string;
  name: string;
  caption: string;
  toolTip: string;
  udn: string;
  phi: boolean;
  mandatory: boolean;

  constructor(control) {
    this.label = control.label || '';
    this.iconClass = control.iconClass || '';
    this.type = control.type || '';
    this.name = control.name || '';
    this.caption = control.caption || '';
    this.toolTip = control.toolTip || '';
    this.udn = control.udn || '';
    this.phi = !!control.phi;
    this.mandatory = !!control.mandatory;
  }

  public getGeneralProperties(): any[] {
    return [
      {
        property: new Textbox({
          type: "textbox",
          name: "caption",
          caption: "Field Name",
          defaultValue: this.caption
        }),
        validations: [Validators.required]
      },
      {
        property: new Textbox({
          type: "textbox",
          name: "toolTip",
          caption: "ToolTip",
          defaultValue: this.toolTip
        }),
        validations: []
      },
      {
        property: new Textbox({
          type: "textbox",
          name: "udn",
          caption: "Attribute Name",
          defaultValue: this.udn
        }),
        validations: [Validators.required]
      }
    ];
  }

  public abstract serialize(type): any;

  public abstract deserialize(type): any;
}
