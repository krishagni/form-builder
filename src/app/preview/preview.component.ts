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
export class PreviewComponent implements OnInit, OnChanges, DoCheck {
  @Input() controls: any[];
  @Input() componentTypes: any;
  selectedRow: number;
  selectedColumn: number;
  @Output() onSelectedRowChange = new EventEmitter<number>();
  @Output() onSelectedColumnChange = new EventEmitter<number>();
  mainForm: FormGroup;
  oldControls:string[] = this.controls;
  oldLength = 0;

  constructor() {
  }

  generateMainForm() {
    this.mainForm = new FormGroup({});
    for (var row = 0; row < this.controls.length; row++) {
      for (var col = 0; col < this.controls[row].length; col++) {
        this.mainForm.addControl(this.controls[row][col].name, new FormControl(this.controls[row][col].value));
      }
    }
  }

  ngOnInit() {
    if(this.controls) {
      this.generateMainForm();
    }
  }

  ngOnChanges() {
    if(this.controls) {
      this.generateMainForm();
    }
  }

  ngDoCheck() {
    if (this.oldControls !== this.controls) {
      this.oldControls = this.controls;
      this.oldLength = this.controls.length;
    } else {
      let newLength = this.controls.length;
      let old = this.oldLength;
      if (old !== newLength) {
        let direction = old < newLength ? 'grew' : 'shrunk';
        this.oldLength = newLength;
      }
    }
    if(this.controls) {
      this.generateMainForm();
    }
  }

  changeSelectedControlIndex(row, column) {
    this.selectedRow = row;
    this.onSelectedRowChange.emit(this.selectedRow);
    this.selectedColumn = column;
    this.onSelectedColumnChange.emit(this.selectedColumn);
  }

  isSelected(row, column): boolean {
    return (this.selectedRow === row && this.selectedColumn === column) ? true
      : false;
  }
}
