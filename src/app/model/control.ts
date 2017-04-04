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
    for (let key in customProps) {
      genProps[key] = customProps[key];
    }
    return genProps;
  }

  public abstract getProps(): any;

  public serialize(): any {
    let controlMetadata = {};
    controlMetadata["type"] = this.type;
    controlMetadata["name"] = this.name;
    controlMetadata["caption"] = this.caption;
    controlMetadata["toolTip"] = this.toolTip;
    controlMetadata["udn"] = this.udn;
    controlMetadata["labelPosition"] = this.labelPosition;
    controlMetadata["phi"] = this.phi;
    controlMetadata["width"] = this.width;
    controlMetadata["showInGrid"] = this.showInGrid;
    controlMetadata["validationRules"] = [];
    if (this.mandatory) {
      controlMetadata["validationRules"].push({
				"name":"required",
			  "params":{}
			});
    }
    let customMetadata = this.customSerialize();
    for (let key in customMetadata) {
      if (key == "validationRules") {
        controlMetadata[key] = controlMetadata[key].concat(customMetadata[key]);
      } else {
        controlMetadata[key] = customMetadata[key];
      }
    }
    return controlMetadata;
  }

  public abstract customSerialize(): any;

  public static deserialize(controlMetadata): any {
    let control = {};
    control["type"] = controlMetadata.type;
    control["name"] = controlMetadata.name;
    control["caption"] = controlMetadata.caption;
    control["toolTip"] = controlMetadata.toolTip;
    control["udn"] = controlMetadata.udn;
    control["labelPosition"] = controlMetadata.labelPosition;
    control["phi"] = controlMetadata.phi;
    control["width"] = controlMetadata.width;
    control["showInGrid"] = controlMetadata.showInGrid;
    controlMetadata.validationRules.forEach(validationRule => {
      switch (validationRule.name) {
        case "required":
          control["mandatory"] = true;
          break;
      }
    });
    return this.prototype.customDeserialize(control, controlMetadata);
  }

  public abstract customDeserialize(control, controlMetadata): any;
  
}
