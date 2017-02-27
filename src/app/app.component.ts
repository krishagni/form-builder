import { Component, OnInit } from '@angular/core';
import { Control } from './model/control';
import { Config } from './config/config';

@Component({
  selector: 'fb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private config: Config) { }
  paletteControls: any[];
  controls: any[] = [];
  selectedPaletteControl: any;
  selectedRow: number = -1;
  selectedColumn: number = -1;
  selectedControl: Control;

  ngOnInit() {
    this.config.getPaletteControls().subscribe(
      data => {
        this.paletteControls = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelectedControlFromPalette(selectedPaletteControl) {
    this.selectedPaletteControl = selectedPaletteControl;
  }

  addControlToForm() {
    if (this.selectedPaletteControl) {
      this.controls.push([this.selectedPaletteControl.clone()]);
    }
  }

  onSelectedRowChange(row) {
    this.selectedRow = row;
  }

  onSelectedColumnChange(column) {
    this.selectedColumn = column;
    this.selectedControl = this.controls[this.selectedRow][this.selectedColumn];
  }

  onPropertiesChange(selectedControl) {
    this.selectedControl = selectedControl;
    this.controls[this.selectedRow][this.selectedColumn] = selectedControl;
  }

  writeForm(type): any {
    /*
      Here controls array will be iterated and on each control its
      serialize method will be called to get its json or xml representation.
      After iterating all controls json or xml representation of form
      will be returned.
    */
  }

  constructForm(type): any {
    /*
      Here received json will be parsed & controls array will be constructed.
    */
  }
}
