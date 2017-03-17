import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../../model/control';

@Component({
  selector: 'fb-textbox-preview',
  templateUrl: './textbox-preview.component.html',
  styleUrls: ['./textbox-preview.component.css']
})
export class TextboxPreviewComponent implements OnInit {

  @Input() control: Control;
  
  @Input() parentGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
