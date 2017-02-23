import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Textbox } from '../model/textbox';
import { RadioButton } from '../model/radio-button';

@Injectable()
export class Config {
  private allPaletteControls: any = {
    "textbox": Textbox.getPalette(),
    "radioButton": RadioButton.getPalette()
  };
  private defaultConfig: any;
  private customConfig: any;

  constructor(private http: Http) {
  }

  public getDefaultConfig(): Observable<any> {
    return this.http.get("app/config/defaultConfig.json")
      .map((res: any) => res.json());
  }

  public getCustomConfig(): Observable<any> {
    return this.http.get("app/config/customConfig.json")
      .map((res: any) => res.json());
  }

  public getPaletteControls(): Observable<any> {
    return Observable.create(observer => {
      var paletteControls: any[] = [];
      this.getCustomConfig().subscribe(
        data => {
          this.customConfig = data;
          if (this.customConfig && Object.keys(this.customConfig).length != 0) {
            for (var key in this.customConfig) {
              if (!this.allPaletteControls.hasOwnProperty(this.customConfig[key])) {
                console.log("Custom Config json file contains invalid key =>" + this.customConfig[key]);
              }
              paletteControls.push(this.allPaletteControls[this.customConfig[key]]);
            }
            observer.next(paletteControls);
            observer.complete();
          } else {
            this.getDefaultConfig().subscribe(
              data => {
                this.defaultConfig = data;
                for (var key in this.defaultConfig) {
                  if (!this.allPaletteControls.hasOwnProperty(this.defaultConfig[key])) {
                    console.log("Default Config json file contains invalid key =>" + this.defaultConfig[key]);
                  }
                  paletteControls.push(this.allPaletteControls[this.defaultConfig[key]]);
                }
                observer.next(paletteControls);
                observer.complete();
              },
              error => {
                console.log("Error parsing Default Config json file =>" + error);
                observer.next(paletteControls);
                observer.complete();
              }
            );
          }
        },
        error => {
          console.log("Error parsing Custom Config json file =>" + error);
          observer.next(paletteControls);
          observer.complete();
        }
      );
    });
  }
}