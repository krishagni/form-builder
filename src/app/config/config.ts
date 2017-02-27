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
    return this.http.get("assets/defaultConfig.json")
      .map((res: any) => res.json());
  }

  public getCustomConfig(): Observable<any> {
    return this.http.get("assets/customConfig.json")
      .map((res: any) => res.json());
  }

  public getPaletteControls(): Observable<any> {
    return Observable.create(observer => {
      var paletteControls: any[] = [];
      this.getCustomConfig().subscribe(
        data => {
          this.customConfig = data;
          if (this.customConfig && Object.keys(this.customConfig).length != 0) {
            paletteControls = this.getPaletteControlsAsPerConfig(this.customConfig);
            observer.next(paletteControls);
            observer.complete();
          } else {
            this.getDefaultConfig().subscribe(
              data => {
                this.defaultConfig = data;
                paletteControls = this.getPaletteControlsAsPerConfig(this.defaultConfig);
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
          this.getDefaultConfig().subscribe(
            data => {
              this.defaultConfig = data;
              paletteControls = this.getPaletteControlsAsPerConfig(this.defaultConfig);
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
      );
    });
  }

  getPaletteControlsAsPerConfig(config) {
    var paletteControls: any[] = [];
    for (var key in config) {
      if (!this.allPaletteControls.hasOwnProperty(config[key])) {
        console.log("Config json file contains invalid key =>" + config[key]);
        break;
      }
      paletteControls.push(this.allPaletteControls[config[key]]);
    }
    return paletteControls;
  }
}