import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShomeComponent } from './shome.component';

describe('ShomeComponent', () => {
  let component: ShomeComponent;
  let fixture: ComponentFixture<ShomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
