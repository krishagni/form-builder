import { Component, OnInit } from '@angular/core';

import { Control } from './model/control';
import { RegistryService } from './config/registry.service';

@Component({
  selector: 'fb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form = {
    counter: 0,
    caption: "",
    name: "",
    controls: []
  };

  paletteControls: any[];

  selectedPaletteControl: any;

  selectedControl: Control;

  constructor(private registryService: RegistryService) {
  }

  ngOnInit() {
    this.paletteControls = this.registryService.getPaletteControls();
  }

  private onPaletteControlSelect(selectedPaletteControl) {
    this.selectedPaletteControl = selectedPaletteControl;
  }

  private addControlToForm() {
    if (this.selectedPaletteControl) {
      this.form.controls = this.form.controls.concat(
        [[this.selectedPaletteControl.modelClass.getInstance(++this.form.counter)]]
      );
    }
  }

  private onControlSelect(selectedControl) {
    this.selectedControl = selectedControl;
  }

  private writeForm(type): any {
    //TODO
    /*
      Here controls array will be iterated and on each control its
      serialize method will be called to get its json or xml representation.
      After iterating all controls json or xml representation of form
      will be returned.
    */
  }

  private constructForm(type): any {
    // TODO
    /*
      Here received form object will parsed to set name, caption & controls of the form.
      While parsing each form control, names of controls will be parsed to get max count 
      value, this max count will be counter for the form builder app
    */
  }
  
}
