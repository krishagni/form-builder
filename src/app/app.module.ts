import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaletteComponent } from './palette/palette.component';
import { PreviewComponent } from './preview/preview.component';
import { PropertiesComponent } from './properties/properties.component';
import { Config } from './config/config';
import { ControlComponent } from './controls/control.component';
import { TextboxComponent } from './controls/textbox/textbox.component';
import { RadioButtonComponent } from './controls/radio-button/radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent,
    PreviewComponent,
    PropertiesComponent,
    ControlComponent,
    TextboxComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ControlComponent,
    TextboxComponent,
    RadioButtonComponent
  ],
  providers: [
    Config
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
