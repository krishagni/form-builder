import { Component, OnInit, OnDestroy, Compiler, ComponentRef, ViewChild,
  ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Control } from '../model/control';
import { IControlData } from './control-data';

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
  
  private isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler) {
  }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    let factory = this.componentFactoryResolver.resolveComponentFactory
      (this.control.componentType);
    this.componentRef = this.target.createComponent(factory);
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
