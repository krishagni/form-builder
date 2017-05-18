import { Validators } from '@angular/forms';

import { Control, GeneralProps, Number, SingleCheckbox, RadioButton, SingleSelect } from '.';

export class Dropdown extends Control {

  minLength: number;

  maxLength: number;

  url: boolean;

  password: boolean;

  pvs: any[];

  pvOrdering: string;

  constructor(dropdown) {
    super(dropdown);
    this.minLength = dropdown.minLength;
    this.maxLength = dropdown.maxLength;
    this.url = !!dropdown.url;
    this.password = !!dropdown.password;
    this.pvs = dropdown.pvs || [];
  }

  public static getInstance(counter): Dropdown {
    // TODO: integrate i18n
    return new Dropdown({
      type: "dropdown",
      name: "dropdown" + counter,
      caption: "Dropdown Label",
      udn: "dropdownLabel" + counter,
      pvs: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" }
      ],
      value: "Option 1",
      labelPosition: "LEFT_SIDE"
    });
  }

  public getProps(): any {
    let customProps = {
      pvOrdering: {
        model: new RadioButton({
          type: "radioButton",
          name: "pvOrdering",
          caption: "PV Ordering",
          dataType: "STRING",
          pvs: [
            { text: "None", value: "NONE" },
            { text: "Ascending", value: "ASC" },
            { text: "Descending", value: "DESC" }
          ],
          optionsPerRow: 3,
          value: this.pvOrdering
        }),
        validations: []
      },
      pvs: {
        model: {
          name: "pvs",
          value: JSON.parse(JSON.stringify(this.pvs))
        },
        validations: []
      },
      value: {
        model: {
          name: "value",
          value: this.value
        },
        validations: []
      }
    };
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }
/*
  public getProps(): any {
    let customProps = {
      value: {
        model: new Dropdown({
          type: "dropdown",
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
*/
  public customSerialize(): any {
    let dropdown = {};
    dropdown["defaultValue"] = this.value;
    dropdown["url"] = this.url || false;
    dropdown["password"] = this.password || false;
    dropdown["validationRules"] = [];
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
      dropdown["validationRules"].push(textLength);
    }
    return dropdown;
  }

  public customDeserialize(dropdown, dropdownMetadata): any {
    dropdown["value"] = dropdownMetadata.defaultValue;
    dropdown["url"] = dropdownMetadata.url;
    dropdown["password"] = dropdownMetadata.password;
    dropdown["pvs"] = dropdownMetadata.pvs;
    dropdownMetadata.validationRules.forEach(validationRule => {
      switch (validationRule.name) {
        case "textLength":
          dropdown["minLength"] = validationRule.params.min;
          dropdown["maxLength"] = validationRule.params.max;
          break;
      }
    });
    return new Dropdown(dropdown);
  }

}
