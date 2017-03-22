import { Component, OnInit, OnDestroy, ComponentRef, ViewChild,
  ViewContainerRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../model';
import { IControlData } from './control-data';
import { RegistryService, UtilService } from '../providers';

@Component({
  selector: 'fb-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit, OnDestroy {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() control: Control;

  @Input() parentGroup: FormGroup;

  componentRef: ComponentRef<Component>;
  
  isViewInitialized: boolean = false;

  constructor(private registryService: RegistryService,
    private utilService: UtilService) {
  }

  private updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    this.componentRef = this.utilService.createComponent(
      this.componentRef, this.target,
      this.registryService.getControlComponent(this.control.type));
    let component = (<IControlData>this.componentRef.instance);
    component.control = this.control;
    component.parentGroup = this.parentGroup;
  }

  ngOnInit() {
    if (this.control) {
      this.isViewInitialized = true;
      this.updateComponent();
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
