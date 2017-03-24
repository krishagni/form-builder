import { Component, OnInit, OnChanges, OnDestroy, ComponentRef, ViewChild,
  ViewContainerRef, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Control } from '../model';
import { IControlPropsData } from '.';
import { RegistryService, UtilService } from '../providers';

@Component({
  selector: 'fb-control-props',
  templateUrl: './control-props.component.html',
  styleUrls: ['./control-props.component.css']
})
export class ControlPropsComponent implements OnInit, OnChanges, OnDestroy {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() control: Control;

  props: any;

  propsForm: FormGroup;

  componentRef: ComponentRef<Component>;
  
  constructor(private registryService: RegistryService,
    private utilService: UtilService) {
  }

  private updateComponent() {
    if (this.control) {
      this.initPropsForm();
      this.componentRef = this.utilService.createComponent(
        this.componentRef, this.target,
        this.registryService.getPropsComponent(this.control.type));
      let component = (<IControlPropsData>this.componentRef.instance);
      component.props = this.props;
      component.propsForm = this.propsForm;
    }
  }

  private initPropsForm() {
    this.props = this.control.getProps();
    this.propsForm = new FormGroup({});
    if (this.props) {
      for (var key in this.props) {
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

  ngOnInit() {
    this.updateComponent();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private onSubmit() {
    Object.assign(this.control, this.propsForm.value);
  }

}
