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
        }),
        validations: []
      },
    };
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }

  public customSerialize(): any {
    let date = {};
    return date;
  }

  public customDeserialize(date, dateMetadata): any {
    date["value"] = dateMetadata.defaultValue;
    return new Date(date);
  }
}
