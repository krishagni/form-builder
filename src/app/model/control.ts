import { GeneralProperties } from './general-properties';

export abstract class Control {

  type: string;

  componentType: any;

  name: string;

  caption: string;

  toolTip: string;

  udn: string;

  value: any;

  phi: boolean;

  mandatory: boolean;

  width: number;
  
  showInGrid: boolean;

  constructor(control) {
    this.type = control.type || '';
    this.componentType = control.componentType;
    this.name = control.name || '';
    this.caption = control.caption || '';
    this.toolTip = control.toolTip || '';
    this.udn = control.udn || '';
    this.value = control.value || '';
    this.phi = !!control.phi;
    this.mandatory = !!control.mandatory;
    this.width = control.width || '';
    this.showInGrid = !!control.showInGrid;
  }

  public abstract getCustomProperties(): any[];

  public getProperties(): any[] {
    var generalProperties = GeneralProperties.getGeneralProperties(this);
    var customProperties = this.getCustomProperties();
    return generalProperties.concat(customProperties);
  }

  public abstract serialize(type): any;

  public abstract deserialize(type): any;
  
}
