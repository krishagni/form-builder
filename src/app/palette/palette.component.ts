import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fb-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  @Input() paletteControls: any[];

  @Output() onControlSelect = new EventEmitter<any>();

  selectedControl: any;

  constructor() {
  }

  ngOnInit() {
  }

  changeSelectedControl(selectedControl) {
    this.selectedControl = selectedControl;
    this.onControlSelect.emit(this.selectedControl);
  }
  
}
