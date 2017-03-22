import { Injectable, ComponentRef, Component, ComponentFactoryResolver } from '@angular/core';

@Injectable()
export class UtilService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public createComponent(componentRef, target, componentType): ComponentRef<Component> {
    if (componentRef) {
      componentRef.destroy();
    }
    let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    componentRef = target.createComponent(factory);
    return componentRef;
  }

}
