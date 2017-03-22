import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-textbox-props',
  templateUrl: './textbox-props.component.html',
  styleUrls: ['./textbox-props.component.css']
})
export class TextboxPropsComponent implements OnInit {

  @Input() props: any;

  @Input() propsForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
