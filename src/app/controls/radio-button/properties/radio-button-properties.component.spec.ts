import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonPropertiesComponent } from './radio-button-properties.component';

describe('RadioButtonPropertiesComponent', () => {
  let component: RadioButtonPropertiesComponent;
  let fixture: ComponentFixture<RadioButtonPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
