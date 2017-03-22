import { FormGroup } from '@angular/forms';

import { Control } from '../model';

export interface IControlData {

  control: Control;

  parentGroup: FormGroup;
  
}
