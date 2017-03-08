import { Component, OnInit, OnChanges, DoCheck, Input, Output, EventEmitter }
  from '@angular/core';
import { Control } from '../model/control';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule }
  from '@angular/forms';

@Component({
  selector: 'fb-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, DoCheck {

  @Input() controls: any;

  @Input() controlOffsets: any[];

  @Output() onSelectedControlChange = new EventEmitter<any>();

  selectedRow: number;

  selectedColumn: number;

  mainForm: FormGroup;

  oldControlOffsetsLength = this.controlOffsets? this.controlOffsets.length: 0;

  constructor() {
  }

  generateMainForm() {
    this.mainForm = new FormGroup({});
    for (var row = 0; row < this.controlOffsets.length; row++) {
      for (var col = 0; col < this.controlOffsets[row].length; col++) {
        var uuid = this.controlOffsets[row][col];
        this.mainForm.addControl(this.controls[uuid].name, new FormControl(this.controls[uuid]
          .value));
      }
    }
  }

  controlOffsetsChanged(): boolean {
    if (!this.controlOffsets) {
      return false;
    } else {
      if (this.oldControlOffsetsLength !== this.controlOffsets.length) {
        this.oldControlOffsetsLength = this.controlOffsets.length;
        return true;
      } else {
        return false;
      }
    }
  }

  ngOnInit() {
    if(this.controlOffsets) {
      this.generateMainForm();
    }
  }

  ngDoCheck() {
    if(this.controlOffsetsChanged()) {
      this.generateMainForm();
    }
  }

  changeSelectedControlIndex(row, column) {
    if (row != this.selectedRow || column != this.selectedColumn) {
      this.onSelectedControlChange.emit(this.controlOffsets[row][column]);
    }
    this.selectedRow = row;
    this.selectedColumn = column;
  }
  
}
