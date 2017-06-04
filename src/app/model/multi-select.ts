import { Validators } from '@angular/forms';

import { Control, GeneralProps, Number, SingleCheckbox, RadioButton, SingleSelect } from '.';

export class MultiSelect extends Control {
  dataType: string;

  pvs: any[];
  
  pvOrdering: string;

  counter: number;

  constructor(multiSelect) {
    super(multiSelect);
    this.dataType = multiSelect.dataType || '';
    this.pvs = multiSelect.pvs || [];
    this.pvOrdering = multiSelect.pvOrdering || "NONE";
    this.counter = multiSelect.counter;
  }

  public static getInstance(counter): MultiSelect {
    // TODO: integrate i18n
    return new MultiSelect({
      type: "multiSelect",
      name: "multiSelect" + counter,
      caption: "Multiple Select",
      udn: "multiSelectLabel" + counter,
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
    let multiSelect = {};
    multiSelect["pvOrdering"] = this.pvOrdering;
    multiSelect["dataType"] = this.dataType;
    multiSelect["pvs"] = [];
    this.pvs.forEach(pv => {
      multiSelect["pvs"].push({
        value: pv.value
      });
    });
    return multiSelect;
  }

  public customDeserialize(multiSelect, multiSelectMetadata): any {
    multiSelect["pvOrdering"] = multiSelectMetadata.pvOrdering;
    multiSelect["dataType"] = multiSelectMetadata.dataType;
    multiSelect["pvs"] = [];
    multiSelectMetadata.pvs.forEach(pv => {
      multiSelect["pvs"].push({ text: pv.value, value: pv.value });
    });
    return new MultiSelect(multiSelect);
  }

}
