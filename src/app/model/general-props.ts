import { Validators } from '@angular/forms';

import { Textbox, SingleCheckbox, SingleSelect } from '.';

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
          Validators.minLength(5),
          Validators.maxLength(25)
        ],
        errorKeys: [
          "required",
          "minlength",
          "maxlength"
        ],
        errorMessages: {
          required: "Field Name is required",
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
          pattern: "Attribute Name must contain alphanumeric characters only",
          minlength: "Minimum 5 characters",
          maxlength: "Maximum 25 characters"
        }
      },
      labelPosition: {
        model: new SingleSelect({
          type: "singleSelect",
          name: "labelPosition",
          caption: "Label Position",
          pvs: [
            { value: "LEFT_SIDE" },
            { value: "RIGHT_SIDE" },
            { value: "CENTER" }
          ],
          value: control.labelPosition
        }),
        validations: []
      },
      phi: {
        model: new SingleCheckbox({
          type: "singleCheckbox",
          name: "phi",
          caption: "PHI",
          value: control.phi
        }),
        validations: []
      },
      mandatory: {
        model: new SingleCheckbox({
          type: "singleCheckbox",
          name: "mandatory",
          caption: "Mandatory",
          value: control.mandatory
        }),
        validations: []
      },
      width: {
        model: new Textbox({
          type: "textbox",
          name: "width",
          caption: "Width",
          value: control.width
        }),
        validations: []
      },
      showInGrid: {
        model: new SingleCheckbox({
          type: "singleCheckbox",
          name: "showInGrid",
          caption: "Show In Grid",
          value: control.showInGrid
        }),
        validations: []
      }
    };
  }

}