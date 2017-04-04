import { Injectable, ComponentRef, Component, ComponentFactoryResolver } from '@angular/core';

import { RegistryService } from '.';

@Injectable()
export class UtilService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private registryService: RegistryService) {
  }

  public createComponent(componentType, target, componentInputs): ComponentRef<Component> {
    let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    let componentRef = target.createComponent(factory);
    Object.assign(componentRef.instance, componentInputs);
    return componentRef;
  }

  public destroyComponent(componentRef) {
    if (componentRef) {
      componentRef.destroy();
    }
  }

  public createControl(controlMetadata) {
    let controlClass = this.registryService.getModel(controlMetadata.type);
    let control  = controlClass.deserialize(controlMetadata);
    return control;
  }

}
