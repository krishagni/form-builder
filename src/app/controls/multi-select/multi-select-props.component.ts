import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-multi-select-props',
  templateUrl: './multi-select-props.component.html'
})
export class MultiSelectPropsComponent implements OnInit {

  @Input() props: any;

  @Input() propsForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
