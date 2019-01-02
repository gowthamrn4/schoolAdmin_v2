import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentlandingComponent } from './studentlanding.component';

describe('StudentlandingComponent', () => {
  let component: StudentlandingComponent;
  let fixture: ComponentFixture<StudentlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
