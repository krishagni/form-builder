import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPropsComponent } from './number-props.component';

describe('NumberPropsComponent', () => {
  let component: NumberPropsComponent;
  let fixture: ComponentFixture<NumberPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
