import { Component, ComponentRef, ViewChild, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { OnChanges, SimpleChange, ComponentFactory } from '@angular/core';
import { IHaveDynamicData, TypeBuilder } from './type.builder';
import { TemplateBuilder } from './template.builder';
import { Control } from '../model/control';

@Component({
  selector: 'properties-form',
  template: `
    <div #propertiesFormPlaceHolder>
    </div>
    `,
})
export class PropertiesForm implements AfterViewInit, OnChanges, OnDestroy,
  OnInit {
  @ViewChild('propertiesFormPlaceHolder', { read: ViewContainerRef })
  protected dynamicComponentTarget: ViewContainerRef;
  protected componentRef: ComponentRef<IHaveDynamicData>;
  protected wasViewInitialized = false;
  @Input() selectedControl: Control;

  constructor(protected typeBuilder: TypeBuilder,
    protected templateBuilder: TemplateBuilder) {
  }

  ngOnInit() {
  }

  protected refreshContent() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    var template = this.templateBuilder.prepareTemplate(this.selectedControl);
    this.typeBuilder.createComponentFactory(template).then((factory:
      ComponentFactory<IHaveDynamicData>) => {
      this.componentRef = this.dynamicComponentTarget
        .createComponent(factory);
      let component = this.componentRef.instance;
      component.selectedControl = this.selectedControl;
    });
  }

  public ngAfterViewInit(): void {
  }

  public ngOnChanges(changes: { [key: string]: SimpleChange }): void {
    if (this.wasViewInitialized) {
      return;
    }
    this.refreshContent();
  }

  public ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}