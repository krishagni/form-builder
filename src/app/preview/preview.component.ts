import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../control';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  inputs: ['controls', 'selectedIndex'],
  outputs: ['controlsChange', 'selectedIndexChange'],
})
export class PreviewComponent implements OnInit {
  @Input() controls: Control[] = [];
  @Input() selectedIndex: number[];
  @Output() controlsChange = new EventEmitter<Control[]>();
  @Output() selectedIndexChange = new EventEmitter<number[]>();

  constructor() { }

  ngOnInit() {
  }

  changeSelectedControlIndex(idx, subIdx) {
    this.selectedIndex[0] = idx;
    this.selectedIndex[1] = subIdx;
    this.selectedIndexChange.emit(this.selectedIndex);
  }

  isSelected(idx, subIdx): boolean {
    return (this.selectedIndex[0] === idx && this.selectedIndex[1] === subIdx) ? true : false;
  }

}
