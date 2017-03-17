import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonPreviewComponent } from './radio-button-preview.component';

describe('RadioButtonPreviewComponent', () => {
  let component: RadioButtonPreviewComponent;
  let fixture: ComponentFixture<RadioButtonPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
