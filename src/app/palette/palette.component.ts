import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fb-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit, OnChanges {

  @Input() paletteControls: any[];

  @Input() paletteControlDeselect: boolean;

  @Output() onControlSelect = new EventEmitter<any>();

  selectedControl: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.paletteControlDeselect) {
      this.selectedControl = undefined;
    }
  }

  private changeSelectedControl(selectedControl) {
    this.selectedControl = selectedControl;
    this.onControlSelect.emit(this.selectedControl);
  }
  
}
