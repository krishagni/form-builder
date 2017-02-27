import { Component, ComponentFactory, NgModule, Input, Output, EventEmitter, 
  Injectable, Compiler } from '@angular/core';
import { JitCompilerFactory } from '@angular/compiler';
import * as _ from "lodash";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface IHaveDynamicData {
  selectedControl: any;
}

@Injectable()
export class TypeBuilder {
  private compiler: Compiler = new JitCompilerFactory([{
    useDebug: false,
    useJit: true
  }]).createCompiler();
  constructor() { }
  private cacheOfFactories: { [templateKey: string]: 
    ComponentFactory<IHaveDynamicData> } = {};

  public createComponentFactory(template: string)
    : Promise<ComponentFactory<IHaveDynamicData>> {
    let factory = this.cacheOfFactories[template];
    if (factory) {
      return new Promise((resolve) => {
        resolve(factory);
      });
    }
    let type = this.createNewComponent(template);
    let module = this.createComponentModule(type);
    return new Promise((resolve) => {
      this.compiler.compileModuleAndAllComponentsAsync(module).then(
        (moduleWithFactories) => {
          factory = _.find(moduleWithFactories.componentFactories, {
            componentType: type
          });
        this.cacheOfFactories[template] = factory;
        resolve(factory);
      });
    });
  }

  protected createNewComponent(tmpl: string) {
    @Component({
      selector: 'dynamic-component',
      template: tmpl,
    })
    class DynamicComponent implements IHaveDynamicData {
      @Input() public selectedControl: any;
      @Output() selectedControlChange = new EventEmitter<any>();
      propertiesForm: FormGroup;

      constructor() {
      }

      ngOnInit() {
        let group: any = {};
        this.selectedControl.getProperties().forEach(property => {
          group[property.property.name] = new FormControl
          (property.property.defaultValue || '', property.validations);
        });
        this.propertiesForm = new FormGroup(group);
      }

      onSubmit() {
        for (var key in this.propertiesForm.value) {
          this.selectedControl[key] = this.propertiesForm.value[key];
        }
        this.selectedControlChange.emit(this.selectedControl);
      }
    };
    return DynamicComponent;
  }

  protected createComponentModule(componentType: any) {
    @NgModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        componentType
      ],
    })
    class RuntimeComponentModule {
    }
    return RuntimeComponentModule;
  }
}