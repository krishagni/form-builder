import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaletteComponent } from './palette/palette.component';
import { PreviewComponent } from './preview/preview.component';
import { PropertiesComponent } from './properties/properties.component';
import { RegistryService } from './config/registry.service';
import { ControlPreviewComponent } from './controls/control-preview/control-preview.component';
import { TextboxPreviewComponent } from './controls/textbox/preview/textbox-preview.component';
import { RadioButtonPreviewComponent } from 
'./controls/radio-button/preview/radio-button-preview.component';
import { GeneralPropertiesComponent } from 
'./controls/general-properties/general-properties.component';
import { ControlPropertiesComponent } from 
'./controls/control-properties/control-properties.component';
import { TextboxPropertiesComponent } from 
'./controls/textbox/properties/textbox-properties.component';
import { RadioButtonPropertiesComponent } from 
'./controls/radio-button/properties/radio-button-properties.component';

@NgModule({
  
  declarations: [
    AppComponent,
    PaletteComponent,
    PreviewComponent,
    PropertiesComponent,
    ControlPreviewComponent,
    TextboxPreviewComponent,
    RadioButtonPreviewComponent,
    GeneralPropertiesComponent,
    ControlPropertiesComponent,
    TextboxPropertiesComponent,
    RadioButtonPropertiesComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],

  entryComponents: [
    ControlPreviewComponent,
    TextboxPreviewComponent,
    RadioButtonPreviewComponent,
    GeneralPropertiesComponent,
    ControlPropertiesComponent,
    TextboxPropertiesComponent,
    RadioButtonPropertiesComponent
  ],

  providers: [
    RegistryService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
