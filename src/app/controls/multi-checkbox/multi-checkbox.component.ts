import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../model';

@Component({
  selector: 'fb-multi-checkbox',
  templateUrl: './multi-checkbox.component.html'
})
export class MultiCheckboxComponent implements OnInit {

  @Input() control: Control;
  
  @Input() parentGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
