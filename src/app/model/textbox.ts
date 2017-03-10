import { Control } from './control';
import { TextboxComponent } from '../controls/textbox/textbox.component';
import { ControlCounter } from '../config/control-counter';

export class Textbox extends Control {

  constructor(textbox) {
    super(textbox);
  }

  public static getInstance(): Textbox {
    var counter = ControlCounter.getCounter();
    // TODO: integrate i18n
    return new Textbox({
      type: "textbox",
      componentType: TextboxComponent,
      name: "textbox" + counter,
      caption: "Textbox Label",
      udn: "textboxLabel" + counter
    });
  }

  public getCustomProperties(): any[] {
    return [
      {
        property: new Textbox({
          type: "textbox",
          componentType: TextboxComponent,
          name: "value",
          caption: "Default Value",
          value: this.value
        }),
        validations: []
      }
    ];
  }

  public serialize(type): any {
  }

  public deserialize(type): any {
  }
  
}
