import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../model/control';
import { Textbox } from '../model/textbox';
import { RadioButton } from '../model/radio-button';

@Component({
  selector: 'fb-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  @Input() paletteControls: any[];

  @Output() onSelectedControlFromPalette = new EventEmitter<any>();

  selectedControl;

  constructor() {
  }

  ngOnInit() {
  }

  onControlSelectionChange(paletteControl) {
    this.selectedControl = paletteControl;
    this.onSelectedControlFromPalette.emit(paletteControl);
  }
  
}
