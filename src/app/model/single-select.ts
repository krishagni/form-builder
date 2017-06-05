import { Control, GeneralProps, RadioButton } from '.';

export class SingleSelect extends Control {

  dataType: string;

  pvs: any[];
  
  pvOrdering: string;

  counter: number;

  constructor(singleSelect) {
    super(singleSelect);
    this.dataType = singleSelect.dataType || '';
    this.pvs = singleSelect.pvs || [];
    this.pvOrdering = singleSelect.pvOrdering || "NONE";
    this.counter = singleSelect.counter;
  }

  public static getInstance(counter): SingleSelect {
    // TODO: integrate i18n
    return new SingleSelect({
      type: "singleSelect",
      name: "singleSelect" + counter,
      caption: "Single Select Label",
      udn: "singleSelectLabel" + counter,
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
    let singleSelect = {};
    singleSelect["pvOrdering"] = this.pvOrdering;
    singleSelect["dataType"] = this.dataType;
    singleSelect["pvs"] = [];
    this.pvs.forEach(pv => {
      singleSelect["pvs"].push({
        value: pv.value
      });
    });
    return singleSelect;
  }

  public customDeserialize(singleSelect, singleSelectMetadata): any {
    singleSelect["pvOrdering"] = singleSelectMetadata.pvOrdering;
    singleSelect["dataType"] = singleSelectMetadata.dataType;
    singleSelect["pvs"] = [];
    singleSelectMetadata.pvs.forEach(pv => {
      singleSelect["pvs"].push({ text: pv.value, value: pv.value });
    });
    return new SingleSelect(singleSelect);
  }
}
