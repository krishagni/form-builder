import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-radio-button-props',
  templateUrl: './radio-button-props.component.html',
  styleUrls: ['./radio-button-props.component.css']
})
export class RadioButtonPropsComponent implements OnInit {

  @Input() props: any;

  @Input() propsForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
