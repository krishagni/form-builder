import { Validators } from '@angular/forms';

import { Control, GeneralProps, Number, SingleCheckbox, RadioButton, SingleSelect } from '.';

export class MultiSelect extends Control {

  minLength: number;

  maxLength: number;

  url: boolean;

  password: boolean;

  pvs: any[];

  pvOrdering: string;

  constructor(multiSelect) {
    super(multiSelect);
    this.minLength = multiSelect.minLength;
    this.maxLength = multiSelect.maxLength;
    this.url = !!multiSelect.url;
    this.password = !!multiSelect.password;
    this.pvs = multiSelect.pvs || [];
  }

  public static getInstance(counter): MultiSelect {
    // TODO: integrate i18n
    return new MultiSelect({
      type: "multiSelect",
      name: "multiSelect" + counter,
      caption: "Multi Select Label",
      udn: "multiSelectLabel" + counter,
      pvs: [
        { id: "Option 1", itemName: "Option 1", text: "Option 1", value: "Option 1" },
        { id: "Option 2", itemName: "Option 2", text: "Option 2", value: "Option 2" },
        { id: "Option 3", itemName: "Option 3", text: "Option 3", value: "Option 3" }
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

  public customSerialize(): any {
    let multiSelect = {};
    multiSelect["defaultValue"] = this.value;
    multiSelect["url"] = this.url || false;
    multiSelect["password"] = this.password || false;
    multiSelect["validationRules"] = [];
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
      multiSelect["validationRules"].push(textLength);
    }
    return multiSelect;
  }

  public customDeserialize(multiSelect, multiSelectMetadata): any {
    multiSelect["value"] = multiSelectMetadata.defaultValue;
    multiSelect["url"] = multiSelectMetadata.url;
    multiSelect["password"] = multiSelectMetadata.password;
    multiSelect["pvs"] = multiSelectMetadata.pvs;
    multiSelectMetadata.validationRules.forEach(validationRule => {
      switch (validationRule.name) {
        case "textLength":
          multiSelect["minLength"] = validationRule.params.min;
          multiSelect["maxLength"] = validationRule.params.max;
          break;
      }
    });
    return new MultiSelect(multiSelect);
  }

}
