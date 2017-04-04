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
        { text: "Option 1", value: "Option 1" },
        { text: "Option 2", value: "Option 2" },
        { text: "Option 3", value: "Option 3" },
        { text: "Option 4", value: "Option 4" },
        { text: "Option 5", value: "Option 5" }
      ],
      value: "Option 1",
      pvOrdering: "NONE"
    });
  }

  public getProps(): any {
    let customProps = {};
    return this.concatProps(GeneralProps.getGeneralProps(this), customProps);
  }

  public customSerialize(): any {
  }

  public customDeserialize(singleSelect, singleSelectMetadata): any {
  }
  
}
