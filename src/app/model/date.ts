import { Validators } from '@angular/forms';

import { Control, GeneralProps, Number, SingleCheckbox, RadioButton, SingleSelect } from '.';

export class Date extends Control {


  constructor(date) {
    super(date);
  }

  public static getInstance(counter): Date {
    // TODO: integrate i18n
    return new Date({
      type: "date",
      name: "date" + counter,
      caption: "Date Label",
      udn: "dateLabel" + counter,
      labelPosition: "LEFT_SIDE"
    });
  }

  public getProps(): any {
    let customProps = {
      value: {
        model: {
          name: "value",
          value: this.value
        }
      }
    };
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }

  public customSerialize(): any {
    let date = {};
    date["defaultValue"] = this.value;
    return date;
  }

  public customDeserialize(date, dateMetadata): any {
    date["value"] = dateMetadata.defaultValue;
    return new Date(date);
  }

}
