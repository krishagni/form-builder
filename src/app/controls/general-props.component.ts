import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-general-props',
  templateUrl: './general-props.component.html'
})
export class GeneralPropsComponent implements OnInit {

  @Input() props: any;
  
  @Input() propsForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
