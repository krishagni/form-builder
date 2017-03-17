import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxPropertiesComponent } from './textbox-properties.component';

describe('TextboxPropertiesComponent', () => {
  let component: TextboxPropertiesComponent;
  let fixture: ComponentFixture<TextboxPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
