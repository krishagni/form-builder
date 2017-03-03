import { Control } from './control';

export class RadioButton extends Control {
  counter: number = 0;
  optionsPerRow: number;
  showInGrid: boolean;
  dataType: string;
  permissibleValues: string[];
  defaultPvIndex: number;
  pvOrdering: string;

  constructor(radioButton) {
    super(radioButton);
    this.optionsPerRow = radioButton.optionsPerRow || 2;
    this.showInGrid = !!radioButton.showInGrid;
    this.dataType = radioButton.dataType || '';
    this.permissibleValues = radioButton.permissibleValues || [];
    this.defaultPvIndex = radioButton.defaultPvIndex || 0;
    this.pvOrdering = radioButton.pvOrdering || "NONE";
  }

  public static getPalette() {
    return new RadioButton({
      label: "Radio Button",
      iconClass: "fa fa-list"
    });
  }

  public clone(): RadioButton {
    ++this.counter;
    return new RadioButton({
      label: "Radio Button",
      iconClass: "fa fa-list",
      type: "radioButton",
      name: "radioButton" + this.counter,
      caption: "Radio Button Label " + this.counter,
      udn: "radioButtonLabel" + this.counter,
      dataType: "STRING",
      permissibleValues: ["Option 1", "Option 2"],
      defaultPvIndex: 0,
      optionsPerRow: 2,
      pvOrdering: "NONE"
    });
  }

  public getCustomProperties(): any[] {
    return [];
  }

  public serialize(type): any {
  }

  public deserialize(type): any {
  }
}
