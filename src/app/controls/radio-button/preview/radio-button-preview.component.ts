import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../../model/control';

@Component({
  selector: 'fb-radio-button-preview',
  templateUrl: './radio-button-preview.component.html',
  styleUrls: ['./radio-button-preview.component.css']
})
export class RadioButtonPreviewComponent implements OnInit {

  @Input() control: Control;
  
  @Input() parentGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
