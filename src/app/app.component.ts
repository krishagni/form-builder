import { Component, OnInit } from '@angular/core';
import { Control } from './model/control';
import { Config } from './config/config';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'fb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  paletteControls: any[];

  selectedPaletteControl: any;

  controls: any = {};

  controlOffsets: any[] = [];

  selectedControl: Control;

  selectedControlUUID: string;

  constructor(private config: Config) {
  }

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
      let uuid = UUID.UUID();
      this.controls[uuid] = this.selectedPaletteControl.clone();
      this.controlOffsets.push([uuid]);
    }
  }

  onSelectedControlChange(selectedControlUUID) {
    this.selectedControlUUID = selectedControlUUID;
    this.selectedControl = this.controls[this.selectedControlUUID];
  }

  onPropertiesChange(selectedControl) {
    this.selectedControl = selectedControl;
    this.controls[this.selectedControlUUID] = selectedControl;
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
