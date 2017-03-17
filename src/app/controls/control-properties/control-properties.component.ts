import { Component, OnInit, OnChanges, OnDestroy, Compiler, ComponentRef, ViewChild,
  ComponentFactoryResolver, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Control } from '../../model/control';
import { IControlPropertiesData } from './control-properties-data';
import { RegistryService } from '../../config/registry.service';

@Component({
  selector: 'fb-control-properties',
  templateUrl: './control-properties.component.html',
  styleUrls: ['./control-properties.component.css']
})
export class ControlPropertiesComponent implements OnInit, OnChanges {

  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  @Input() control: Control;

  componentRef: ComponentRef<Component>;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler, private registryService: RegistryService) {
  }

  private updateComponent() {
    if (this.control) {
      if (this.componentRef) {
        this.componentRef.destroy();
      }
      let factory = this.componentFactoryResolver.resolveComponentFactory
        (this.registryService.getPropertiesComponent(this.control.type));
      this.componentRef = this.target.createComponent(factory);
      let component = (<IControlPropertiesData>this.componentRef.instance);
      component.properties = this.control.getProperties();
      component.onSave.subscribe(properties => {
        Object.assign(this.control, properties);
      });
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

}
