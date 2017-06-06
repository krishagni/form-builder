import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../model';

@Component({
  selector: 'fb-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {

  @Input() control: Control;
  
  @Input() parentGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
