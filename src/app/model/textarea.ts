import { Validators } from '@angular/forms';

import { Control, GeneralProps, Number, SingleCheckbox } from '.';

export class Textarea extends Control {
  numberOfRows: number;

  counter: number;

  constructor(textarea) {
    super(textarea);
    this.numberOfRows = textarea.numberOfRows;
    this.counter = textarea.counter;
  }

  public static getInstance(counter): Textarea {
    // TODO: integrate i18n
    return new Textarea({
      type: "textarea",
      name: "textarea" + counter,
      caption: "Text Area",
      udn: "textareaLabel" + counter,
      labelPosition: "LEFT_SIDE",
      numberOfRows: 3,
      counter: counter
    });
  }

  public getProps(): any {
    let customProps = {
      value: {
        model: new Textarea({
          type: "textarea",
          name: "value",
          caption: "Default Value",
          value: this.value
        }),
        validations: [],
        errorKeys: [
        ],
        errorMessages: {
        }
      },
      numberOfRows: {
        model: new Number({
          type: "number",
          name: "numberOfRows",
          caption: "Number of Rows",
          value: this.numberOfRows,
          minValue: 1
        }),
        validations: [
          Validators.pattern("[0-9]*")
        ],
        errorKeys: [
          "pattern"
        ],
        errorMessages: {
          pattern: "Invalid Options Per Row"
        }
      }
    };
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }

  public customSerialize(): any {
    let textarea = {};
    textarea["defaultValue"] = this.value;
    textarea["numberOfRows"] = this.numberOfRows;
    return textarea;
  }

  public customDeserialize(textarea, textareaMetadata): any {
    textarea["value"] = textareaMetadata.defaultValue;
    textarea["numberOfRows"] = textareaMetadata.numberOfRows;
    return new Textarea(textarea);
  }
}
