import { Control, GeneralProps } from '.';

export class SingleCheckbox extends Control {
  counter: number;

  constructor(singleCheckbox) {
    super(singleCheckbox);
    this.counter = singleCheckbox.counter;
  }

  public static getInstance(counter): SingleCheckbox {
    // TODO: integrate i18n
    return new SingleCheckbox({
      type: "singleCheckbox",
      name: "singleCheckbox" + counter,
      caption: "Single Checkbox Label",
      udn: "singleCheckbox" + counter,
      value: false,
      counter: counter
    });
  }

  public getProps(): any {
    let customProps = {
      value: {
        model: new SingleCheckbox({
          type: "singleCheckbox",
          name: "value",
          caption: "Default Checked",
          value: this.value
        }),
        validations: []
      }
    };
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }

  public customSerialize(): any {
  }

  public customDeserialize(singleCheckbox, singleCheckboxMetadata): any {
  }
  
}
