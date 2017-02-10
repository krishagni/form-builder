import { Control } from './control';

export class Textbox extends Control {
  defaultValue: string;
  width: number;
  showInGrid: boolean;

  constructor(textbox) {
    super(textbox);
    this.defaultValue = textbox.defaultValue || '';
    this.width = textbox.width;
    this.showInGrid = !!textbox.showInGrid;
  }
}
