import { Validators } from '@angular/forms';

import { Control, GeneralProps, Number, SingleSelect } from '.';

export class RadioButton extends Control {

  optionsPerRow: number;

  dataType: string;

  pvs: any[];
  
  pvOrdering: string;

  counter: number;

  constructor(radioButton) {
    super(radioButton);
    this.optionsPerRow = radioButton.optionsPerRow || 2;
    this.dataType = radioButton.dataType || '';
    this.pvs = radioButton.pvs || [];
    this.pvOrdering = radioButton.pvOrdering || "NONE";
    this.counter = radioButton.counter;
  }

  public static getInstance(counter): RadioButton {
    // TODO: integrate i18n
    return new RadioButton({
      type: "radioButton",
      name: "radioButton" + counter,
      caption: "Radio Buttons",
      udn: "radioButtonLabel" + counter,
      dataType: "STRING",
      pvs: [
        { text: "Option 1", value: "Option 1" },
        { text: "Option 2", value: "Option 2" }
      ],
      value: "Option 1",
      optionsPerRow: 2,
      pvOrdering: "NONE",
      labelPosition: "LEFT_SIDE",
      counter: counter
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
      optionsPerRow: {
        model: new Number({
          type: "number",
          name: "optionsPerRow",
          caption: "Options Per Row",
          value: this.optionsPerRow,
          minValue: 1
        }),
        validations: [
          Validators.pattern("[0-9]*")
        ],
        errorKeys: [
          "pattern"
        ],
        errorMessages: {
          pattern: "Invalid Options Per Row"
        }
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
      },
      dataType: {
        model: new SingleSelect({
          type: "singleSelect",
          name: "dataType",
          caption: "Data Type",
          pvs: [
            { text: "String", value: "STRING" },
            { text: "Integer", value: "INTEGER" },
            { text: "Float", value: "FLOAT" },
            { text: "Boolean", value: "BOOLEAN" }
          ],
          value: this.dataType
        }),
        validations: []
      }
    };
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }

  public customSerialize(): any {
    let radio = {};
    radio["pvOrdering"] = this.pvOrdering;
    radio["dataType"] = this.dataType;
    radio["pvs"] = [];
    this.pvs.forEach(pv => {
      radio["pvs"].push({
        value: pv.value
      });
    });
    radio["optionsPerRow"] = this.optionsPerRow;
    return radio;
  }

  public customDeserialize(radio, radioMetadata): any {
    radio["pvOrdering"] = radioMetadata.pvOrdering;
    radio["dataType"] = radioMetadata.dataType;
    radio["pvs"] = [];
    radioMetadata.pvs.forEach(pv => {
      radio["pvs"].push({ text: pv.value, value: pv.value });
    });
    radio["optionsPerRow"] = radioMetadata.optionsPerRow;
    return new RadioButton(radio);
  }
  
}
