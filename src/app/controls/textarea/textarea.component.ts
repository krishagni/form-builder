import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../model';

@Component({
  selector: 'fb-textarea',
  templateUrl: './textarea.component.html'
})
export class TextareaComponent implements OnInit {

  @Input() control: Control;
  
  @Input() parentGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
