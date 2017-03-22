import { Control } from './control';
import { GeneralProps } from './general-props';

export class Number extends Control {

  minValue: number;

  maxValue: number;

  constructor(number) {
    super(number);
    this.minValue = number.minValue;
    this.maxValue = number.maxValue;
  }

  public static getInstance(counter): Number {
    // TODO: integrate i18n
    return new Number({
      type: "number",
      name: "number" + counter,
      caption: "Number Label",
      udn: "numberLabel" + counter
    });
  }

  public getProps(): any {
    var customProps = {
      value: {
        model: new Number({
          type: "number",
          name: "value",
          caption: "Default Value",
          value: this.value,
          minValue: this.minValue,
          maxValue: this.maxValue
        }),
        validations: []
      },
      minValue: {
        model: new Number({
          type: "number",
          name: "minValue",
          caption: "Min Value",
          value: this.minValue
        }),
        validations: []
      },
      maxValue: {
        model: new Number({
          type: "number",
          name: "maxValue",
          caption: "Max Value",
          value: this.maxValue
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
