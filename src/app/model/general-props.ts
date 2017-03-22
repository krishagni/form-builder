import { Validators } from '@angular/forms';

import { Textbox } from './textbox';

export class GeneralProps {

  public static getGeneralProps(control): any {
    return {
      caption: {
        model: new Textbox({
          type: "textbox",
          name: "caption",
          caption: "Field Name",
          value: control.caption,
          minLength: 5,
          maxLength: 25
        }),
        validations: [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9\\-\\s]+$"),
          Validators.minLength(5),
          Validators.maxLength(25)
        ],
        errorKeys: [
          "required",
          "pattern",
          "minlength",
          "maxlength"
        ],
        errorMessages: {
          required: "Field Name is required",
          pattern: "Field Name must contain alphanumeric characters",
          minlength: "Minimum 5 characters",
          maxlength: "Maximum 25 characters"
        }
      },
      toolTip: {
        model: new Textbox({
          type: "textbox",
          name: "toolTip",
          caption: "ToolTip",
          value: control.toolTip
        }),
        validations: []
      },
      udn: {
        model: new Textbox({
          type: "textbox",
          name: "udn",
          caption: "Attribute Name",
          value: control.udn,
          minLength: 5,
          maxLength: 25
        }),
        validations: [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]*"),
          Validators.minLength(5),
          Validators.maxLength(25)
        ],
        errorKeys: [
          "required",
          "pattern",
          "minlength",
          "maxlength"
        ],
        errorMessages: {
          required: "Attribute Name is required",
          pattern: "Attribute Name must contain alphanumeric characters",
          minlength: "Minimum 5 characters",
          maxlength: "Maximum 25 characters"
        }
      },
      width: {
        model: new Textbox({
          type: "textbox",
          name: "width",
          caption: "Width",
          value: control.width
        }),
        validations: []
      }
    };
  }

}