import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../model';

@Component({
  selector: 'fb-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @Input() control: Control;
  
  @Input() parentGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
