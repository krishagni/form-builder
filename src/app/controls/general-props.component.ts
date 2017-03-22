import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-general-props',
  templateUrl: './general-props.component.html',
  styleUrls: ['./general-props.component.css']
})
export class GeneralPropsComponent implements OnInit {

  @Input() props: any;
  
  @Input() propsForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
