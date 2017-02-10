export class Control {
  type: string;
  fieldPlacement: string;
  fieldPlacementRow: number;
  fieldName: string;
  tooltip: string;
  attributeName: string;
  phi: boolean;
  mandatory: boolean;

  constructor(control) {
    this.type = control.type || '';
    this.fieldPlacement = control.fieldPlacement || '';
    this.fieldPlacementRow = control.fieldPlacementRow || -1;
    this.fieldName = control.fieldName || '';
    this.tooltip = control.tooltip || '';
    this.attributeName = control.attributeName || '';
    this.phi = !!control.phi;
    this.mandatory = !!control.mandatory;
  }
}
