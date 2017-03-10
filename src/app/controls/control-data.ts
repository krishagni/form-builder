import { FormControl, FormGroup } from '@angular/forms';

import { Control } from '../model/control';

export interface IControlData {

  control: Control;

  parentGroup: FormGroup;
  
}
