import { Component, OnInit } from '@angular/core';

import { Control } from './model';
import { RegistryService } from './providers';

@Component({
  selector: 'fb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form = {
    counter: 0,
    caption: "",
    name: "",
    controls: []
  };

  paletteControls: any[];

  selectedPaletteControl: any;

  selectedControl: Control;

  paletteControlDeselect: boolean = false;

  constructor(private registryService: RegistryService) {
  }

  ngOnInit() {
    this.paletteControls = this.registryService.getPaletteControls();
    var formMetadata = {
      "name":"demoForm",
      "caption":"Demo Form",
      "rows":[
        [ // start of row
          {
            "type":"textbox",
            "validationRules":[
              {
                "name":"required",
                "params":{}
              },
              {
                "name":"textLength",
                "params": {
                  "min": 5,
                  "max": 32
                }
              }
            ],
            "defaultValue":"",
            "toolTip":"",
            "caption":"Given Name",
            "url":false,
            "password":false,
            "labelPosition":"LEFT_SIDE",
            "name":"ST7",
            "udn":"givenName",
            "width": 8
          }
        ], // end of row
        [
          {
            "type":"radioButton",
            "pvOrdering":"NONE",
            "validationRules":[
              {
                "name": "required",
                "params": {}
              }
            ],
            "dataType":"STRING",
            "toolTip":"",
            "caption":"Do you smoke?",
            "pvs":[
              {"value":"Yes"},
              {"value":"No"}
            ],
            "optionsPerRow":3,
            "labelPosition":"LEFT_SIDE",
            "name":"RB3",
            "udn":"doYouSmoke"
          }
        ]
      ]
    };
    this.constructForm(formMetadata);
  }

  private onPaletteControlSelect(selectedPaletteControl) {
    this.selectedPaletteControl = selectedPaletteControl;
    this.paletteControlDeselect = false;
  }

  private addControlToForm() {
    if (this.selectedPaletteControl) {
      this.form.controls = this.form.controls.concat(
        [[this.selectedPaletteControl.modelClass.getInstance(++this.form.counter)]]
      );
      this.paletteControlDeselect = true;
      this.selectedPaletteControl = undefined;
    }
  }

  private onControlSelect(selectedControl) {
    this.selectedControl = selectedControl;
  }

  private writeForm(): any {
    var formMetadata = {};
    formMetadata["caption"] = this.form.caption;
    formMetadata["name"] = this.form.name;
    formMetadata["rows"] = [];
    this.form.controls.forEach(controlRow => {
      var row = [];
      controlRow.forEach(control => {
        row.push(control.serialize());
      });
      formMetadata["rows"].push(row);
    });
    console.log(formMetadata);
  }

  private constructForm(formMetadata): any {
    this.form.caption = formMetadata.caption;
    this.form.name = formMetadata.name;
    formMetadata.rows.forEach(row => {
      var controlRow = [];
      row.forEach( controlMetadata => {
        var counter = parseInt(controlMetadata.name.match(/(\d+)$/)[0], 10);
        if (counter > this.form.counter) {
          this.form.counter = counter;
        }
        var controlClass = this.registryService.getModel(controlMetadata.type);
        var control  = controlClass.prototype.deserialize(controlMetadata);
        controlRow.push(control);
      });
      this.form.controls.push(controlRow);
    });
  }
  
}
