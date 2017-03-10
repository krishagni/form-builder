import { Control } from './control';
import { RadioButtonComponent } from '../controls/radio-button/radio-button.component';
import { ControlCounter } from '../config/control-counter';

export class RadioButton extends Control {

  optionsPerRow: number;

  dataType: string;

  permissibleValues: any[];
  
  pvOrdering: string;

  constructor(radioButton) {
    super(radioButton);
    this.optionsPerRow = radioButton.optionsPerRow || 2;
    this.dataType = radioButton.dataType || '';
    this.permissibleValues = radioButton.permissibleValues || [];
    this.pvOrdering = radioButton.pvOrdering || "NONE";
  }

  public static getInstance(): RadioButton {
    var counter = ControlCounter.getCounter();
    // TODO: integrate i18n
    return new RadioButton({
      type: "radioButton",
      componentType: RadioButtonComponent,
      name: "radioButton" + counter,
      caption: "Radio Button Label",
      udn: "radioButtonLabel" + counter,
      dataType: "STRING",
      permissibleValues: [
        {"value": "Option 1"},
        {"value": "Option 2"},
        {"value": "Option 3"},
        {"value": "Option 4"},
        {"value": "Option 5"}
      ],
      value: "Option 3",
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
