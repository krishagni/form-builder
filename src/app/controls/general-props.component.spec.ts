import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPropsComponent } from './general-props.component';

describe('GeneralPropsComponent', () => {
  let component: GeneralPropsComponent;
  let fixture: ComponentFixture<GeneralPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
