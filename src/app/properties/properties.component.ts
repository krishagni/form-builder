import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../model/control';
import { SanitizeHtmlPipe } from '../sanitize-html.pipe';

@Component({
  selector: 'fb-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit, OnChanges {
  @Input() selectedControl: Control;
  @Output() selectedControlChange = new EventEmitter<Control>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  onSelectedControlChange(selectedControl) {
    this.selectedControlChange.emit(selectedControl);
  }
}
