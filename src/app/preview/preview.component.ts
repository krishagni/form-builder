import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../model/control';
import { SanitizeHtmlPipe } from '../sanitize-html.pipe';

@Component({
  selector: 'fb-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() controls: any[];
  @Input() selectedRow: number;
  @Output() onSelectedRowChange = new EventEmitter<number>();
  @Input() selectedColumn: number;
  @Output() onSelectedColumnChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  changeSelectedControlIndex(row, column) {
    this.selectedRow = row;
    this.onSelectedRowChange.emit(this.selectedRow);
    this.selectedColumn = column;
    this.onSelectedColumnChange.emit(this.selectedColumn);
  }

  isSelected(row, column): boolean {
    return (this.selectedRow === row && this.selectedColumn === column) ? true : false;
  }
}
