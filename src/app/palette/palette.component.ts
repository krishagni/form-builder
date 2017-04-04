import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fb-palette',
  templateUrl: './palette.component.html'
})
export class PaletteComponent implements OnInit {

  @Input() paletteControls: any[];

  constructor() {
  }

  ngOnInit() {
  }
  
}
