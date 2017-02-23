import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PropertiesForm } from './properties-form';
import { TypeBuilder } from './type.builder';
import { TemplateBuilder } from './template.builder';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PropertiesForm],
  exports: [PropertiesForm],
})
export class PropertiesFormModule {
  static forRoot() {
    return {
      ngModule: PropertiesFormModule,
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        TemplateBuilder,
        TypeBuilder
      ],
    };
  }
}