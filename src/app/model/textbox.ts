import { Control } from './control';

export class Textbox extends Control {
  counter: number = 0;
  defaultValue: string;
  width: number;
  showInGrid: boolean;

  constructor(textbox) {
    super(textbox);
    this.defaultValue = textbox.defaultValue || '';
    this.width = textbox.width || '';
    this.showInGrid = !!textbox.showInGrid;
  }

  public clone(): Textbox {
    ++this.counter;
    return new Textbox({
      label: "Textbox",
      iconClass: "fa fa-list",
      type: "textbox",
      name: "textbox" + this.counter,
      caption: "Textbox Label",
      udn: "textboxLabel" + this.counter
    });
  }

  public static getPalette() {
    return new Textbox({
      label: "Textbox",
      iconClass: "fa fa-text-width"
    });
  }

  public getPreview(): string {
    return `<div class="form-group">
      <label>` + this.caption + `</label>
      <input class="form-control" type="text" title="` + this.toolTip + `"    attr.maxlength= "` + this.width + `" id="` + this.name + `" 
      value="` + this.defaultValue + `" formControlName="` + this.name + `"/>
      </div>`;
  }

  public getProperties(): any[] {
    var properties = this.getGeneralProperties();
    properties.push(
      {
        property: new Textbox({
          type: "textbox",
          name: "defaultValue",
          caption: "Default Value",
          defaultValue: this.defaultValue
        }),
        validations: []
      },
      {
        property: new Textbox({
          type: "textbox",
          name: "width",
          caption: "Width",
          defaultValue: this.width
        }),
        validations: []
      },
    );
    return properties;
  }

  public serialize(type): any {
  }

  public deserialize(type): any {
  }
}
