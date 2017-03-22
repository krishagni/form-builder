import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaletteComponent } from './palette/palette.component';
import { PreviewComponent } from './preview/preview.component';
import { PropertiesComponent } from './properties/properties.component';
import { RegistryService, UtilService } from './providers';
import { ControlComponent, ControlPropsComponent, GeneralPropsComponent } from './controls';
import { TextboxComponent, TextboxPropsComponent } from './controls/textbox';
import { RadioButtonComponent, RadioButtonPropsComponent } from './controls/radio-button';
import { NumberComponent, NumberPropsComponent } from './controls/number';

@NgModule({
  
  declarations: [
    AppComponent,
    PaletteComponent,
    PreviewComponent,
    PropertiesComponent,
    ControlComponent,
    ControlPropsComponent,
    GeneralPropsComponent,
    TextboxComponent,
    TextboxPropsComponent,
    RadioButtonComponent,
    RadioButtonPropsComponent,
    NumberComponent,
    NumberPropsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],

  entryComponents: [
    ControlComponent,
    ControlPropsComponent,
    GeneralPropsComponent,
    TextboxComponent,
    TextboxPropsComponent,
    RadioButtonComponent,
    RadioButtonPropsComponent,
    NumberComponent,
    NumberPropsComponent
  ],

  providers: [
    RegistryService,
    UtilService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
