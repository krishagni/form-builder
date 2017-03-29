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

  public abstract serialize(): any;

  public abstract deserialize(metadata): any;

  public commonSerialize(): any {
    var controlMetadata = {};
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
    return controlMetadata;
  }

  public commonDeserialize(controlMetadata): any {
    var control = {};
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
    return control;
  }
  
}
