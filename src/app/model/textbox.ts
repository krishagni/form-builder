import { Control } from './control';
import { Number } from './number';
import { GeneralProps } from './general-props';

export class Textbox extends Control {

  minLength: number;

  maxLength: number;

  constructor(textbox) {
    super(textbox);
    this.minLength = textbox.minLength;
    this.maxLength = textbox.maxLength;
  }

  public static getInstance(counter): Textbox {
    // TODO: integrate i18n
    return new Textbox({
      type: "textbox",
      name: "textbox" + counter,
      caption: "Textbox Label",
      udn: "textboxLabel" + counter
    });
  }

  public getProps(): any {
    var customProps = {
      value: {
        model: new Textbox({
          type: "textbox",
          name: "value",
          caption: "Default Value",
          value: this.value
        }),
        validations: []
      },
      minLength: {
        model: new Number({
          type: "number",
          name: "minLength",
          caption: "Min Length",
          value: this.minLength,
          minValue: 5,
          maxValue: 25
        }),
        validations: []
      },
      maxLength: {
        model: new Number({
          type: "number",
          name: "maxLength",
          caption: "Max Length",
          value: this.maxLength,
          minValue: 5,
          maxValue: 25
        }),
        validations: []
      }
    };
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }

  public serialize(type): any {
  }

  public deserialize(type): any {
  }
  
}
