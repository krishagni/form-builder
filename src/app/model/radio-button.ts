import { Control } from './control';

export class RadioButton extends Control {
  counter: number = 0;
  optionsPerRow: number;
  showInGrid: boolean;
  dataType: string;
  permissibleValues: string[];
  defaultPvIndex: number;
  pvOrdering: string;

  constructor(radioButton) {
    super(radioButton);
    this.optionsPerRow = radioButton.optionsPerRow || 2;
    this.showInGrid = !!radioButton.showInGrid;
    this.dataType = radioButton.dataType || '';
    this.permissibleValues = radioButton.permissibleValues || [];
    this.defaultPvIndex = radioButton.defaultPvIndex || 0;
    this.pvOrdering = radioButton.pvOrdering || "NONE";
  }

  clone(): RadioButton {
    ++this.counter;
    return new RadioButton({
      label: "Radio Button",
      iconClass: "fa fa-list",
      type: "radio",
      name: "radio" + this.counter,
      caption: "Radio Button Label",
      udn: "radioButtonLabel" + this.counter,
      dataType: "STRING",
      permissibleValues: ["Option 1", "Option 2"],
      defaultPvIndex: 0,
      optionsPerRow: 2,
      pvOrdering: "NONE"
    });
  }

  public static getPalette() {
    return new RadioButton({
      label: "Radio Button",
      iconClass: "fa fa-list"
    });
  }

  getPreview(): string {
    var preview: string = `<div class="form-group">
      <label>` + this.caption + `</label>
      <div>`;
    for (var i = 0; i < this.permissibleValues.length; i++) {
      preview = preview +
        `<label class="radio-inline" title="` + this.toolTip + `">
          <input type="radio" name="` + this.name + `" 
          [checked]="` + i + ` == ` + this.defaultPvIndex + `"/>`
            + this.permissibleValues[i] +
        `</label>`;
      if (this.optionsPerRow > 0 && (i + 1) % this.optionsPerRow == 0) {
        preview = preview + `<br>`;
      }
    }
    preview = preview + `</div></div>`;
    return preview;
  }

  public getProperties(): any[] {
    var properties = this.getGeneralProperties();
    return properties;
  }

  public serialize(type): any {
  }

  public deserialize(type): any {
  }
}
