import { Component, OnInit, OnDestroy, ComponentRef, ViewChild,
  ViewContainerRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../model';
import { RegistryService, UtilService } from '../providers';

@Component({
  selector: 'fb-control',
  templateUrl: './control.component.html'
})
export class ControlComponent implements OnInit, OnDestroy {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() control: Control;

  @Input() parentGroup: FormGroup;

  componentRef: ComponentRef<Component>;
  
  constructor(private registryService: RegistryService,
    private utilService: UtilService) {
  }

  ngOnInit() {
    if (this.control) {
      this.updateComponent();
    }
  }

  ngOnDestroy() {
    this.utilService.destroyComponent(this.componentRef);
  }

  private updateComponent() {
    this.utilService.destroyComponent(this.componentRef);
    let componentInputs = {};
    componentInputs["control"] = this.control;
    componentInputs["parentGroup"] = this.parentGroup;
    this.componentRef = this.utilService.createComponent(
      this.registryService.getControlComponent(this.control.type),
      this.target, componentInputs);
  }

}
