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
    this.pvs.push({ id: "Option", itemName: "Option", text: "Option", value: "Option" });
  }

  private deletePv(pvIdx) {
    this.pvs.splice(pvIdx, 1);
  }

  private optionTextEdited(pvIdx, event) {
    this.pvs[pvIdx].id = event.currentTarget.value;
    this.pvs[pvIdx].itemName = event.currentTarget.value;
    this.pvs[pvIdx].text = event.currentTarget.value;
    this.pvs[pvIdx].value = event.currentTarget.value;
  }

  private uploadPvsFromFile() {
    let pvsFile = this.pvsFileInput.nativeElement.files[0];
    if (pvsFile) {
      let reader = new FileReader();
      reader.onload = (event) => {
        let fileContents = reader.result;
        let lines = fileContents.replace(/\r\n|\r(?!\n)/g, '\n').split('\n');
        lines.forEach(line => {
          if (line.length > 0) {
            line.split('\r').forEach( pv => {
              this.pvs.push({ id: pv, itemName: pv, text: pv, value: pv });
            });
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
