import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaletteComponent } from './palette/palette.component';
import { PreviewComponent } from './preview/preview.component';
import { PropertiesComponent } from './properties/properties.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { PropertiesFormModule } from './properties-form/properties-form-module';
import { Config } from './config/config';

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent,
    PreviewComponent,
    PropertiesComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PropertiesFormModule.forRoot()
  ],
  providers: [
    Config
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
