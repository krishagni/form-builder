import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Control } from '../model';

@Component({
  selector: 'fb-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnChanges {

  @Input() controls: any[];

  @Input() counter: number;

  @Output() onControlSelect = new EventEmitter<Control>();

  mainForm: FormGroup;

  selectedControl: Control;

  constructor() {
  }

  private initForm() {
    this.mainForm = new FormGroup({});
    if(this.controls.length>0) {
      this.onControlSelect.emit(this.selectedControl);
      this.controls.forEach(controlsRow => {
        controlsRow.forEach(control => {
          this.mainForm.addControl(
            control.name,
            new FormControl(control.value)
          );
        });
      });
    }
  }

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges() {
    this.initForm();
  }

  private changeSelectedControl(selectedControl) {
    if (this.selectedControl != selectedControl) {
      this.selectedControl = selectedControl;
      this.onControlSelect.emit(this.selectedControl);
    }
  }

  private getDraggedControl(dragData) {
    var draggedControlIndexes = dragData.split("-");
    var draggedControl = {};
    draggedControl["row"] = parseInt(draggedControlIndexes[0], 10);
    draggedControl["col"]= parseInt(draggedControlIndexes[1], 10);
    draggedControl["control"] = this.controls[draggedControlIndexes[0]][draggedControlIndexes[1]];
    return draggedControl;
  }

  private controlDroppedOnEmptyRow(event, droppedRow) {
    if (typeof event.dragData === "string") {
      // Re-arrangement of control on canvas
      var draggedControl = this.getDraggedControl(event.dragData);
      var controlRow = [];
      controlRow.push(draggedControl["control"]);
      if (this.controls[draggedControl["row"]].length > 1) {
        this.controls[draggedControl["row"]].splice(draggedControl["col"], 1);
        this.controls.splice(droppedRow, 0, controlRow);
      } else {
        this.controls.splice(droppedRow, 0, controlRow);
        if (droppedRow > draggedControl["row"]) {
          this.controls.splice(draggedControl["row"], 1);
        } else {
          this.controls.splice(++draggedControl["row"], 1);
        }
      }
    } else {
      // Control is dragged from palette
      this.addControlToForm(event.dragData, droppedRow, undefined);
    }
  }

  private controlDroppedInsideRow(event, droppedRow, droppedCol) {
    if (typeof event.dragData === "string") {
      // Re-arrangement of control on canvas
      var draggedControl = this.getDraggedControl(event.dragData);
      if (this.controls[draggedControl["row"]].length > 1) {
        this.controls[droppedRow].splice(droppedCol, 0, draggedControl["control"]);
        if (droppedRow == draggedControl["row"]) {
          if (droppedCol > draggedControl["col"]) {
            this.controls[draggedControl["row"]].splice(draggedControl["col"], 1);
          } else {
            this.controls[draggedControl["row"]].splice(++draggedControl["col"], 1);
          }
        } else {
          this.controls[draggedControl["row"]].splice(draggedControl["col"], 1);
        }
      } else {
        if (droppedRow != draggedControl["row"]) {
          this.controls[droppedRow].splice(droppedCol, 0, draggedControl["control"]);
          this.controls.splice(draggedControl["row"], 1);
        }
      }
    } else {
      // Control is dragged from palette
      this.addControlToForm(event.dragData, droppedRow, droppedCol);
    }
  }

  private addControlToForm(paletteControl, droppedRow, droppedCol) {
    var control = paletteControl.modelClass.getInstance(++this.counter);
    if (droppedCol != undefined) {
      this.controls[droppedRow].splice(droppedCol, 0, control);
    } else {
      this.controls.splice(droppedRow, 0, [control]);
    }
    this.initForm();
    this.changeSelectedControl(control);
  }
  
}
