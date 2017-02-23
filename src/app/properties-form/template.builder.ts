import { Injectable } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Injectable()
export class TemplateBuilder {
  public prepareTemplate(selectedControl) {
    var template: string =
      `<form novalidate (ngSubmit)="onSubmit()" [formGroup]="propertiesForm">`;
    var properties: any[] = selectedControl.getProperties();
    for (var i = 0; i < properties.length; i++) {
      template = template + properties[i].property.getPreview();
    }
    template = template +
      `<button type="submit" class="btn btn-primary" [disabled] ="propertiesForm.invalid">
        Save
        </button>
      </form>`;
    return template;
  }
}