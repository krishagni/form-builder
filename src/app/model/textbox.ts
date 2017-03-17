import { Control } from './control';

export class Textbox extends Control {

  minLength: string;

  maxLength: string;

  constructor(textbox) {
    super(textbox);
    this.minLength = textbox.minLength || '';
    this.maxLength = textbox.maxLength || '';
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

  public getCustomProperties(): any {
    return {
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
        model: new Textbox({
          type: "textbox",
          name: "minLength",
          caption: "Min Length",
          value: this.minLength
        }),
        validations: []
      },
      maxLength: {
        model: new Textbox({
          type: "textbox",
          name: "maxLength",
          caption: "Max Length",
          value: this.maxLength
        }),
        validations: []
      }
    };
  }

  public serialize(type): any {
  }

  public deserialize(type): any {
  }
  
}
