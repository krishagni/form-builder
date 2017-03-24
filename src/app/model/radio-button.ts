import { Control, GeneralProps, Number, SingleSelect } from '.';

export class RadioButton extends Control {

  optionsPerRow: number;

  dataType: string;

  pvs: any[];
  
  pvOrdering: string;

  constructor(radioButton) {
    super(radioButton);
    this.optionsPerRow = radioButton.optionsPerRow || 2;
    this.dataType = radioButton.dataType || '';
    this.pvs = radioButton.pvs || [];
    this.pvOrdering = radioButton.pvOrdering || "NONE";
  }

  public static getInstance(counter): RadioButton {
    // TODO: integrate i18n
    return new RadioButton({
      type: "radioButton",
      name: "radioButton" + counter,
      caption: "Radio Button Label",
      udn: "radioButtonLabel" + counter,
      dataType: "STRING",
      pvs: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5"
      ],
      value: "Option 1",
      optionsPerRow: 2,
      pvOrdering: "NONE",
      labelPosition: "LEFT_SIDE"
    });
  }

  public getProps(): any {
    var customProps = {
      pvOrdering: {
        model: new RadioButton({
          type: "radioButton",
          name: "pvOrdering",
          caption: "PV Ordering",
          dataType: "STRING",
          pvs: [
            "NONE",
            "ASC",
            "DESC"
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
        validations: []
      },
      pvs: {
        model: {
          name: "pvs",
          value: this.pvs
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
            "STRING",
            "INTEGER",
            "FLOAT",
            "BOOLEAN"
          ],
          value: this.dataType
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
