import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Control } from '../../model';

@Component({
  selector: 'fb-multi-select',
  templateUrl: './multi-select.component.html'
})
export class MultiSelectComponent implements OnInit {

  @Input() control: Control;

  @Input() parentGroup: FormGroup;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor() {
  }

  ngOnInit(){
    this.changeFormat();
    this.dropdownSettings = {
      singleSelection: false,
      text:"Select Hobbies",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true
    };
  }

  changeFormat() {
    //this.control.pvs.forEach(controlsRow => {
      //control.clicked = false;
    //});
  }

  onItemSelect(item){
    console.log('Selected Item:');
    console.log(item);
  }

  OnItemDeSelect(item){
    console.log('De-Selected Item:');
    console.log(item);
  }
}
