import { Control, GeneralProps } from '.';

export class SingleSelect extends Control {

  dataType: string;

  pvs: any[];
  
  pvOrdering: string;

  constructor(singleSelect) {
    super(singleSelect);
    this.dataType = singleSelect.dataType || '';
    this.pvs = singleSelect.pvs || [];
    this.pvOrdering = singleSelect.pvOrdering || "NONE";
  }

  public static getInstance(counter): SingleSelect {
    // TODO: integrate i18n
    return new SingleSelect({
      type: "singleSelect",
      name: "singleSelect" + counter,
      caption: "Single Select Label",
      udn: "singleSelectLabel" + counter,
      dataType: "STRING",
      pvs: [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5"
      ],
      value: "Option 1",
      pvOrdering: "NONE"
    });
  }

  public getProps(): any {
    var customProps = {};
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }

  public serialize(): any {
  }

  public deserialize(metadata): any {
  }
  
}
