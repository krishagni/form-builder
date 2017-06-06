import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fb-file-upload-props',
  templateUrl: './file-upload-props.component.html'
})
export class FileUploadPropsComponent implements OnInit {

  @Input() props: any;

  @Input() propsForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
