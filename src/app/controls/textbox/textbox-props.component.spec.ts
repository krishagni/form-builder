import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxPropsComponent } from './textbox-props.component';

describe('TextboxPropsComponent', () => {
  let component: TextboxPropsComponent;
  let fixture: ComponentFixture<TextboxPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
