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

  @Output() onControlSelect = new EventEmitter<Control>();

  mainForm: FormGroup;

  selectedControl: Control;

  constructor() {
  }

  private initForm() {
    this.mainForm = new FormGroup({});
    if(this.controls.length>0) {
      this.selectedControl = this.controls[this.controls.length-1][0];
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
  
}
