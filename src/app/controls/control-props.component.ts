import { Component, OnInit, OnChanges, OnDestroy, ComponentRef, ViewChild,
  ViewContainerRef, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Control } from '../model';
import { RegistryService, UtilService } from '../providers';

@Component({
  selector: 'fb-control-props',
  templateUrl: './control-props.component.html'
})
export class ControlPropsComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() control: Control;

  props: any;

  propsForm: FormGroup;

  componentRef: ComponentRef<Component>;

  isPropsFormSaved: boolean = false;
  
  constructor(private registryService: RegistryService,
    private utilService: UtilService) {
  }

  ngOnInit() {
    this.updateComponent();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngOnDestroy() {
    this.utilService.destroyComponent(this.componentRef);
  }

  private updateComponent() {
    this.isPropsFormSaved = false;
    if (this.control) {
      this.initPropsForm();
      this.utilService.destroyComponent(this.componentRef);
      let componentInputs = {};
      componentInputs["props"] = this.props;
      componentInputs["propsForm"] = this.propsForm;
      this.componentRef = this.utilService.createComponent(
        this.registryService.getPropsComponent(this.control.type),
        this.target, componentInputs);
    }
  }

  private initPropsForm() {
    this.props = this.control.getProps();
    this.propsForm = new FormGroup({});
    if (this.props) {
      for (let key in this.props) {
        this.propsForm.addControl(
          this.props[key].model.name,
          new FormControl(
            this.props[key].model.value,
            this.props[key].validations
          )
        );
      }
    }
  }

  private onSubmit() {
    Object.assign(this.control, this.propsForm.value);
    if (this.propsForm.value.hasOwnProperty('pvs')) {
      this.control['pvs'] = JSON.parse(JSON.stringify(this.propsForm.value['pvs']));
    }
    this.isPropsFormSaved = true;
  }

  private hideSuccessAlert() {
    this.isPropsFormSaved = false;
  }

}
