import { GeneralProperties } from './general-properties';

export abstract class Control {

  label: string;
  iconClass: string;
  type: string;
  componentType: any;
  name: string;
  caption: string;
  toolTip: string;
  udn: string;
  phi: boolean;
  mandatory: boolean;

  constructor(control) {
    this.label = control.label || '';
    this.iconClass = control.iconClass || '';
    this.type = control.type || '';
    this.componentType = control.componentType;
    this.name = control.name || '';
    this.caption = control.caption || '';
    this.toolTip = control.toolTip || '';
    this.udn = control.udn || '';
    this.phi = !!control.phi;
    this.mandatory = !!control.mandatory;
  }

  public abstract getCustomProperties(): any[];

  public getProperties(): any[] {
    var properties = GeneralProperties.getGeneralProperties(this);
    var customProperties = this.getCustomProperties();
    customProperties.forEach(customProperty => {
      properties.push(customProperty);
    });
    return properties;
  }

  public abstract serialize(type): any;

  public abstract deserialize(type): any;
  
}
