import { Component, OnInit } from '@angular/core';

import { Control } from './model/control';
import { RegistryService } from './config/registry.service';

@Component({
  selector: 'fb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  paletteControls: any[];

  selectedPaletteControl: any;

  controls: any[] = [];

  selectedControl: Control;

  constructor(private registryService: RegistryService) {
  }

  ngOnInit() {
    this.paletteControls = this.registryService.getPaletteControls();
  }

  onPaletteControlSelect(selectedPaletteControl) {
    this.selectedPaletteControl = selectedPaletteControl;
  }

  addControlToForm() {
    if (this.selectedPaletteControl) {
      this.controls = this.controls.concat(
        [[this.selectedPaletteControl.modelClass.getInstance()]]
      );
    }
  }

  onControlSelect(selectedControl) {
    this.selectedControl = selectedControl;
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
