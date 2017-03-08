import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../../model/control';
import { FormControl, FormGroup, Validators, ReactiveFormsModule }
  from '@angular/forms';

@Component({
  selector: 'fb-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Input() control: Control;
  
  @Input() parentGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
