import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCheckboxPropsComponent } from './single-checkbox-props.component';

describe('SingleCheckboxPropsComponent', () => {
  let component: SingleCheckboxPropsComponent;
  let fixture: ComponentFixture<SingleCheckboxPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCheckboxPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCheckboxPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
