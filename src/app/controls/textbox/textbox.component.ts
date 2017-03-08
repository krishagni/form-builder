import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Control } from '../../model/control';
import { FormControl, FormGroup, Validators, ReactiveFormsModule }
  from '@angular/forms';

@Component({
  selector: 'fb-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  @Input() control: Control;
  
  @Input() parentGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
