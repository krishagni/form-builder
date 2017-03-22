import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonPropsComponent } from './radio-button-props.component';

describe('RadioButtonPropsComponent', () => {
  let component: RadioButtonPropsComponent;
  let fixture: ComponentFixture<RadioButtonPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
