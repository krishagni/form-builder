import { Validators } from '@angular/forms';

import { Control, GeneralProps, RadioButton, SingleSelect } from '.';

export class Dropdown extends Control {
  dataType: string;

  pvs: any[];
  
  pvOrdering: string;
  
  counter: number;

  constructor(dropdown) {
    super(dropdown);
    this.dataType = dropdown.dataType || '';
    this.pvs = dropdown.pvs || [];
    this.pvOrdering = dropdown.pvOrdering || "NONE";
    this.counter = dropdown.counter;

  }

  public static getInstance(counter): Dropdown {
    // TODO: integrate i18n
    return new Dropdown({
      type: "dropdown",
      name: "dropdown" + counter,
      caption: "Dropdown",
      udn: "dropdownLabel" + counter,
      dataType: "STRING",
      pvs: [
        { text: "Option 1", value: "Option 1" },
        { text: "Option 2", value: "Option 2" },
        { text: "Option 3", value: "Option 3" }
      ],
      value: "Option 1",
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
    let dropdown = {};
    dropdown["pvOrdering"] = this.pvOrdering;
    dropdown["dataType"] = this.dataType;
    dropdown["pvs"] = [];
    this.pvs.forEach(pv => {
      dropdown["pvs"].push({
        value: pv.value
      });
    });
    return dropdown;
  }

  public customDeserialize(dropdown, dropdownMetadata): any {
    dropdown["pvOrdering"] = dropdownMetadata.pvOrdering;
    dropdown["dataType"] = dropdownMetadata.dataType;
    dropdown["pvs"] = [];
    dropdownMetadata.pvs.forEach(pv => {
      dropdown["pvs"].push({ text: pv.value, value: pv.value });
    });
    return new Dropdown(dropdown);
  }
}
