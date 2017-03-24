export abstract class Control {

  type: string;

  name: string;

  caption: string;

  toolTip: string;

  udn: string;

  labelPosition: string;

  value: any;

  phi: boolean;

  mandatory: boolean;

  width: number;
  
  showInGrid: boolean;

  constructor(control) {
    this.type = control.type || '';
    this.name = control.name || '';
    this.caption = control.caption || '';
    this.toolTip = control.toolTip || '';
    this.udn = control.udn || '';
    this.labelPosition = control.labelPosition || '';
    this.value = control.value==undefined?'':control.value;
    this.phi = !!control.phi;
    this.mandatory = !!control.mandatory;
    this.width = control.width || '';
    this.showInGrid = !!control.showInGrid;
  }

  public concatProps(genProps, customProps) {
    for (var key in customProps) {
      genProps[key] = customProps[key];
    }
    return genProps;
  }

  public abstract getProps(): any;

  public abstract serialize(type): any;

  public abstract deserialize(type): any;
  
}
