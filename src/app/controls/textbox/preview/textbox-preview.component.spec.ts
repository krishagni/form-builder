import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxPreviewComponent } from './textbox-preview.component';

describe('TextboxPreviewComponent', () => {
  let component: TextboxPreviewComponent;
  let fixture: ComponentFixture<TextboxPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
