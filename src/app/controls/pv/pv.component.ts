import { Component, OnInit, Input, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-pv',
  templateUrl: './pv.component.html',
  styleUrls: ['./pv.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PvComponent),
      multi: true
    }
  ]
})
export class PvComponent implements OnInit, ControlValueAccessor {

  @Input('pvs') _pvs = [];

  @Input() propsForm = FormGroup;

  propagateChange = (_: any) => {};

  @ViewChild('pvsFileInput')
  pvsFileInput: any;

  constructor() {
  }

  ngOnInit() {
  }

  get pvs() {
    return this._pvs;
  }

  set pvs(val) {
    this._pvs = val;
    this.propagateChange(this._pvs);
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.pvs = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  private addPv() {
    this.pvs.push("Option");
  }

  private deletePv(pvIdx) {
    this.pvs.splice(pvIdx, 1);
  }

  private optionTextEdited(pvIdx, event) {
    this.pvs[pvIdx] = event.currentTarget.value;
  }

  private uploadPvsFromFile() {
    var pvsFile = this.pvsFileInput.nativeElement.files[0];
    if (pvsFile) {
      var reader = new FileReader();
      reader.onload = (event) => {
        var fileContents = reader.result;
        var lines = fileContents.split('\n');
        lines.forEach(line => {
          if (line.length > 0) {
            this.pvs.push(line);
          }
        });
      }
      reader.readAsText(pvsFile);
      this.pvsFileInput.nativeElement.value = "";
    } else {
      console.log("Failed to load file");
    }
  }

}
