import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadamicClassComponent } from './acadamic-class.component';

describe('AcadamicClassComponent', () => {
  let component: AcadamicClassComponent;
  let fixture: ComponentFixture<AcadamicClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadamicClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadamicClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
