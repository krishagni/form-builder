import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { PaletteComponent } from './palette/palette.component';
import { PreviewComponent } from './preview/preview.component';
import { PropertiesComponent } from './properties/properties.component';
import { RegistryService, UtilService } from './providers';
import { ControlComponent, ControlPropsComponent, GeneralPropsComponent } from './controls';
import { PvComponent } from './controls/pv';
import { ValidationErrorsComponent } from './controls/validation-errors';
import { TextboxComponent, TextboxPropsComponent } from './controls/textbox';
import { RadioButtonComponent, RadioButtonPropsComponent } from './controls/radio-button';
import { DropdownComponent, DropdownPropsComponent } from './controls/dropdown';
import { MultiSelectComponent, MultiSelectPropsComponent } from './controls/multi-select';
import { NumberComponent, NumberPropsComponent } from './controls/number';
import { SingleCheckboxComponent, SingleCheckboxPropsComponent } from './controls/single-checkbox';
import { SingleSelectComponent } from './controls/single-select';
import { AngularMultiSelectModule } from '../../node_modules/angular2-multiselect-dropdown/src/app/angular2-multiselect-dropdown/multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent,
    PreviewComponent,
    PropertiesComponent,
    ControlComponent,
    ControlPropsComponent,
    GeneralPropsComponent,
    PvComponent,
    ValidationErrorsComponent,
    TextboxComponent,
    TextboxPropsComponent,
    RadioButtonComponent,
    RadioButtonPropsComponent,
    DropdownComponent,
    DropdownPropsComponent,
    MultiSelectComponent,
    MultiSelectPropsComponent,
    NumberComponent,
    NumberPropsComponent,
    SingleCheckboxComponent,
    SingleCheckboxPropsComponent,
    SingleSelectComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    DndModule.forRoot()
  ],

  entryComponents: [
    ControlComponent,
    ControlPropsComponent,
    GeneralPropsComponent,
    PvComponent,
    TextboxComponent,
    TextboxPropsComponent,
    RadioButtonComponent,
    RadioButtonPropsComponent,
    DropdownComponent,
    DropdownPropsComponent,
    MultiSelectComponent,
    MultiSelectPropsComponent,
    NumberComponent,
    NumberPropsComponent,
    SingleCheckboxComponent,
    SingleCheckboxPropsComponent,
    SingleSelectComponent
  ],

  providers: [
    RegistryService,
    UtilService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
