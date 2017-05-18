import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../model';

@Component({
  selector: 'fb-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {

  @Input() control: Control;

  @Input() parentGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
