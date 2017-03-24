import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../model';

@Component({
  selector: 'fb-single-checkbox',
  templateUrl: './single-checkbox.component.html',
  styleUrls: ['./single-checkbox.component.css']
})
export class SingleCheckboxComponent implements OnInit {

  @Input() control: Control;
  
  @Input() parentGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
