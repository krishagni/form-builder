import { Control } from './control';
import { TextboxComponent } from '../controls/textbox/textbox.component';

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
      componentType: TextboxComponent,
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
          componentType: TextboxComponent,
          name: "defaultValue",
          caption: "Default Value",
          defaultValue: this.defaultValue
        }),
        validations: []
      },
      {
        property: new Textbox({
          type: "textbox",
          componentType: TextboxComponent,
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
