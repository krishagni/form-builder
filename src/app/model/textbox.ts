import { Control, GeneralProps, Number, SingleCheckbox } from '.';

export class Textbox extends Control {

  minLength: number;

  maxLength: number;

  url: boolean;

  password: boolean;

  constructor(textbox) {
    super(textbox);
    this.minLength = textbox.minLength;
    this.maxLength = textbox.maxLength;
    this.url = !!textbox.url;
    this.password = !!textbox.password;
  }

  public static getInstance(counter): Textbox {
    // TODO: integrate i18n
    return new Textbox({
      type: "textbox",
      name: "textbox" + counter,
      caption: "Textbox Label",
      udn: "textboxLabel" + counter,
      labelPosition: "LEFT_SIDE"
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
      },
      url: {
        model: new SingleCheckbox({
          type: "singleCheckbox",
          name: "url",
          caption: "URL",
          value: this.url
        }),
        validations: []
      },
      password: {
        model: new SingleCheckbox({
          type: "singleCheckbox",
          name: "password",
          caption: "Password",
          value: this.password
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
