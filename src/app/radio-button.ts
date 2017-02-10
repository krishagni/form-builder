import { Control } from './control';

export class RadioButton extends Control {
  optionsPerRow: number;
  showInGrid: boolean;
  datatype: string;
  permissibleValues: string[];
  defaultPvIndex: number;
  pvOrdering: string;

  constructor(radioButton) {
    super(radioButton);
    this.optionsPerRow = radioButton.optionsPerRow;
    this.showInGrid = !!radioButton.showInGrid;
    this.datatype = radioButton.datatype || '';
    this.permissibleValues = radioButton.permissibleValues || [];
    this.defaultPvIndex = radioButton.defaultPvIndex;
    this.pvOrdering = radioButton.pvOrdering || "none";
  }
}
