import { Control, GeneralProps } from '.';

export class SingleCheckbox extends Control {

  constructor(singleCheckbox) {
    super(singleCheckbox);
  }

  public static getInstance(counter): SingleCheckbox {
    // TODO: integrate i18n
    return new SingleCheckbox({
      type: "singleCheckbox",
      name: "singleCheckbox" + counter,
      caption: "Single Checkbox Label",
      udn: "singleCheckbox" + counter,
      value: false
    });
  }

  public getProps(): any {
    var customProps = {
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

  public serialize(): any {
  }

  public deserialize(metadata): any {
  }
  
}
