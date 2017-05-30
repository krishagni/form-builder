import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../model';

@Component({
  selector: 'fb-date',
  templateUrl: './date.component.html'
})
export class DateComponent implements OnInit {

  @Input() control: Control;

  @Input() parentGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
