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

  public static getPalette() {
    return new Textbox({
      label: "Textbox",
      iconClass: "fa fa-text-width"
    });
  }

  public clone(): Textbox {
    ++this.counter;
    return new Textbox({
      label: "Textbox",
      iconClass: "fa fa-list",
      type: "textbox",
      name: "textbox" + this.counter,
      caption: "Textbox Label " + this.counter,
      udn: "textboxLabel" + this.counter
    });
  }

  public getCustomProperties(): any[] {
    return [
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
      }
    ];
  }

  public serialize(type): any {
  }

  public deserialize(type): any {
  }
}
