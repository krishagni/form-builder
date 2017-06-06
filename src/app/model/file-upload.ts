import { Validators } from '@angular/forms';

import { Control, GeneralProps, Number, SingleCheckbox, Textbox } from '.';

export class FileUpload extends Control {

  counter: number;

  placeHolder: string;

  constructor(textbox) {
    super(textbox);
    this.counter = textbox.counter;
    this.placeHolder = textbox.placeHolder;
  }

  public static getInstance(counter): FileUpload {
    // TODO: integrate i18n
    return new FileUpload({
      type: "fileUpload",
      name: "fileUpload" + counter,
      caption: "File Upload",
      udn: "textboxLabel" + counter,
      labelPosition: "LEFT_SIDE",
      counter: counter
    });
  }

  public getProps(): any {
    let customProps = {};
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }

  public customSerialize(): any {
  }

  public customDeserialize(fileUpload, textboxMetadata): any {
  }
}
