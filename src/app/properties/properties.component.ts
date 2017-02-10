import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../control';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  @Input() controls: [Control[]];
  @Output() controlsChange = new EventEmitter<Control[]>();
  @Input() selectedIndex: any[];
  fieldPlacement: string = "";
  fieldPlacementRow: number = -1;
  fieldPlacements: any[] = [
    {
      value: "LAST_ROW",
      text: "Last Row"
    },
    {
      value: "ROW_BEFORE",
      text: "Row Before"
    },
    {
      value: "ROW_AFTER",
      text: "Row After"
    },
    {
      value: "SAME_ROW",
      text: "Same Row"
    }
  ];
  datatypes: any[] = ["String", "Integer", "Float", "Boolean"];
  pvOrderings: any[] = [
    {
      value: "none",
      text: "None"
    },
    {
      value: "asc",
      text: "Ascending"
    },
    {
      value: "desc",
      text: "Descending"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  setCamelCaseToAttributeName(fieldName) {
    this.controls[this.selectedIndex[0]][this.selectedIndex[1]].attributeName = fieldName.replace(/\s(.)/g, function ($1) { return $1.toUpperCase(); })
      .replace(/\s/g, '')
      .replace(/^(.)/, function ($1) { return $1.toLowerCase(); });
  }

  fieldPlacementChanged() {
    var selectedRowIndex = this.selectedIndex[0];
    var selectedRowSubindex = this.selectedIndex[1];
    if (this.fieldPlacement == 'LAST_ROW') {
      var control = this.controls[selectedRowIndex][selectedRowSubindex];
      if (this.controls[selectedRowIndex].length > 1) {
        // If selected control containing row has more than one element
        this.controls[selectedRowIndex].splice(selectedRowSubindex, 1);
      } else {
        // If selected control containing row has one element
        this.controls.splice(selectedRowIndex, 1);
      }
      this.controls.push([control]);
      this.selectedIndex[0] = this.controls.length - 1;
      this.selectedIndex[1] = this.controls[this.selectedIndex[0]].length - 1;
      this.fieldPlacement = "";
    } else if (this.fieldPlacementRow >= 0 && this.fieldPlacement == 'ROW_BEFORE') {
      var control = this.controls[selectedRowIndex][selectedRowSubindex];
      this.controls.splice(this.fieldPlacementRow, 0, [control]);
      if (this.controls[selectedRowIndex].length > 1) {
        // If selected control containing row has more than one element
        this.controls[selectedRowIndex].splice(selectedRowSubindex, 1);
        this.selectedIndex[0] = this.fieldPlacementRow;
        this.selectedIndex[1] = this.controls[this.selectedIndex[0]].length - 1;
      } else {
        // If selected control containing row has one element
        if (this.fieldPlacementRow < selectedRowIndex) {
          this.controls.splice(++selectedRowIndex, 1);
          selectedRowIndex = this.fieldPlacementRow;
        } else if (this.fieldPlacementRow > selectedRowIndex) {
          this.controls.splice(selectedRowIndex, 1);
          selectedRowIndex = this.fieldPlacementRow - 1;
        }
        this.selectedIndex[0] = selectedRowIndex;
        this.selectedIndex[1] = this.controls[this.selectedIndex[0]].length - 1;
      }
      this.fieldPlacement = "";
      this.fieldPlacementRow = -1;
    } else if (this.fieldPlacementRow >= 0 && this.fieldPlacement == 'ROW_AFTER') {
      var control = this.controls[selectedRowIndex][selectedRowSubindex];
      var insertAt = this.fieldPlacementRow;
      ++insertAt;
      this.controls.splice(insertAt, 0, [control]);
      if (this.controls[selectedRowIndex].length > 1) {
        // If selected control containing row has more than one element
        this.controls[selectedRowIndex].splice(selectedRowSubindex, 1);
        this.selectedIndex[0] = insertAt;
        this.selectedIndex[1] = this.controls[this.selectedIndex[0]].length - 1;
      } else {
        // If selected control containing row has one element
        if (this.fieldPlacementRow < selectedRowIndex) {
          this.controls.splice(++selectedRowIndex, 1);
          selectedRowIndex = insertAt;
        } else if (this.fieldPlacementRow > selectedRowIndex) {
          this.controls.splice(selectedRowIndex, 1);
          selectedRowIndex = this.fieldPlacementRow;
        }
        this.selectedIndex[0] = selectedRowIndex;
        this.selectedIndex[1] = this.controls[this.selectedIndex[0]].length - 1;
      }
      this.fieldPlacement = "";
      this.fieldPlacementRow = -1;
    } else if (this.fieldPlacementRow >= 0 && this.fieldPlacement == 'SAME_ROW') {
      var control = this.controls[selectedRowIndex][selectedRowSubindex];
      this.controls[this.fieldPlacementRow].push(control);
      if (this.controls[selectedRowIndex].length > 1) {
        // If selected control containing row has more than one element
        this.controls[selectedRowIndex].splice(selectedRowSubindex, 1);
        this.selectedIndex[0] = this.fieldPlacementRow;
        this.selectedIndex[1] = this.controls[this.selectedIndex[0]].length - 1;
      } else {
        // If selected control containing row has one element
        if (this.fieldPlacementRow < selectedRowIndex) {
          this.controls.splice(selectedRowIndex, 1);
          selectedRowIndex = this.fieldPlacementRow;
        } else if (this.fieldPlacementRow > selectedRowIndex) {
          this.controls.splice(selectedRowIndex, 1);
          selectedRowIndex = this.fieldPlacementRow - 1;
        }
        this.selectedIndex[0] = selectedRowIndex;
        this.selectedIndex[1] = this.controls[this.selectedIndex[0]].length - 1;
      }
      this.fieldPlacement = "";
      this.fieldPlacementRow = -1;
    }
  }

}
