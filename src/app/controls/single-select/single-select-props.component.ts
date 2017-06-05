import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-single-select-props',
  templateUrl: './single-select-props.component.html'
})
export class SingleSelectPropsComponent implements OnInit {

  @Input() props: any;

  @Input() propsForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
