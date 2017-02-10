import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../control';
import { Textbox } from '../textbox';
import { RadioButton } from '../radio-button';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {
  @Input() controls: [Control[]];
  @Output() controlsChange = new EventEmitter<[Control[]]>();
  selectedControl;
  paletteControls: Array<any> = [
    {
      id: "control1",
      value: 'textbox',
      text: 'Textbox',
      icon: '<i class="fa fa-text-width" aria-hidden="true"></i>'
    },
    {
      id: "control2",
      value: 'radio',
      text: 'Radio Button',
      icon: '<i class="fa fa-list" aria-hidden="true"></i>'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onControlSelectionChange(paletteControl) {
    this.selectedControl = paletteControl;
  }

  isSelected(paletteControl): boolean {
    if(!this.selectedControl) {
			return false;
		}
    return this.selectedControl.value===paletteControl.value ? true : false;
	}

  addControlToForm() {
    if (this.selectedControl) {
      console.log(this.selectedControl.value);
      if (this.selectedControl.value == 'textbox') {
        this.controls.push([new Textbox({
          type: this.selectedControl.value,
          fieldName: 'Textbox Label',
          attributeName: 'textboxLabel'
        })]);
        this.controlsChange.emit(this.controls);
      } else if (this.selectedControl.value == 'radio') {
        this.controls.push([new RadioButton({
          type: this.selectedControl.value,
          fieldName: 'Radio Button Label',
          attributeName: 'radioButtonLabel',
          datatype: 'String',
          permissibleValues: ['Option 1', 'Option 2'],
          defaultPvIndex: 1,
          optionsPerRow: 2,
          pvOrdering: 'none'
        })]);
        this.controlsChange.emit(this.controls);
      }
    }
  }
}
