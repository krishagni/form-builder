import { FormGroup } from '@angular/forms';

import { Control } from '../../model/control';

export interface IControlPreviewData {

  control: Control;

  parentGroup: FormGroup;
  
}
