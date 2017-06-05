import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-textarea-props',
  templateUrl: './textarea-props.component.html'
})
export class TextareaPropsComponent implements OnInit {

  @Input() props: any;

  @Input() propsForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
