import { Component, OnInit, OnDestroy, Compiler, ComponentRef, ViewChild,
  ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Control } from '../../model/control';
import { IControlPreviewData } from './control-preview-data';
import { RegistryService } from '../../config/registry.service';

@Component({
  selector: 'fb-control-preview',
  templateUrl: './control-preview.component.html',
  styleUrls: ['./control-preview.component.css']
})
export class ControlPreviewComponent implements OnInit, OnDestroy {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() control: Control;

  @Input() parentGroup: FormGroup;

  componentRef: ComponentRef<Component>;
  
  isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler, private registryService: RegistryService) {
  }

  private updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    let factory = this.componentFactoryResolver.resolveComponentFactory
      (this.registryService.getPreviewComponent(this.control.type));
    this.componentRef = this.target.createComponent(factory);
    let component = (<IControlPreviewData>this.componentRef.instance);
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
