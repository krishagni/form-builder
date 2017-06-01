import { Validators } from '@angular/forms';

import { Control, GeneralProps, Number, SingleCheckbox } from '.';

export class Textbox extends Control {

  minLength: number;

  maxLength: number;

  url: boolean;

  password: boolean;

  counter: number;

  placeHolder: string;

  constructor(textbox) {
    super(textbox);
    this.minLength = textbox.minLength;
    this.maxLength = textbox.maxLength;
    this.url = !!textbox.url;
    this.password = !!textbox.password;
    this.counter = textbox.counter;
    this.placeHolder = textbox.placeHolder;
  }

  public static getInstance(counter): Textbox {
    // TODO: integrate i18n
    return new Textbox({
      type: "textbox",
      name: "textbox" + counter,
      caption: "Single Line Text",
      udn: "textboxLabel" + counter,
      labelPosition: "LEFT_SIDE",
    });
  }

  public getProps(): any {
    let customProps = {
      value: {
        model: new Textbox({
          type: "textbox",
          name: "value",
          caption: "Default Value",
          value: this.value,
          minLength: this.minLength,
          maxLength: this.maxLength
        }),
        validations: [
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength)
        ],
        errorKeys: [
          "minlength",
          "maxlength"
        ],
        errorMessages: {
          minlength: "Minimum " + this.minLength + " characters",
          maxlength: "Maximum " + this.maxLength + " characters"
        }
      },
      minLength: {
        model: new Number({
          type: "number",
          name: "minLength",
          caption: "Min Length",
          value: this.minLength,
          minValue: 0
        }),
        validations: [
          Validators.pattern("[0-9]*")
        ],
        errorKeys: [
          "pattern"
        ],
        errorMessages: {
          pattern: "Invalid Min length"
        }
      },
      maxLength: {
        model: new Number({
          type: "number",
          name: "maxLength",
          caption: "Max Length",
          value: this.maxLength,
          minValue: 0
        }),
        validations: [
          Validators.pattern("[0-9]*")
        ],
        errorKeys: [
          "pattern"
        ],
        errorMessages: {
          pattern: "Invalid Max length"
        }
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

  public customSerialize(): any {
    let textbox = {};
    textbox["defaultValue"] = this.value;
    textbox["url"] = this.url || false;
    textbox["password"] = this.password || false;
    textbox["validationRules"] = [];
    if (this.minLength || this.maxLength) {
      let textLength = {
        "name":"textLength",
        "params": {}
      };
      if (this.minLength) {
        textLength.params["min"] = this.minLength;
      }
      if (this.maxLength) {
        textLength.params["max"] = this.maxLength;
      }
      textbox["validationRules"].push(textLength);
    }
    return textbox;
  }

  public customDeserialize(textbox, textboxMetadata): any {
    textbox["value"] = textboxMetadata.defaultValue;
    textbox["url"] = textboxMetadata.url;
    textbox["password"] = textboxMetadata.password;
    textboxMetadata.validationRules.forEach(validationRule => {
      switch (validationRule.name) {
        case "textLength":
          textbox["minLength"] = validationRule.params.min;
          textbox["maxLength"] = validationRule.params.max;
          break;
      }
    });
    return new Textbox(textbox);
  }
  
}
