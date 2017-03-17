import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPreviewComponent } from './control-preview.component';

describe('ControlComponent', () => {
  let component: ControlPreviewComponent;
  let fixture: ComponentFixture<ControlPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
