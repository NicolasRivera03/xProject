import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAtStepComponent } from './work-at-step.component';

describe('WorkAtStepComponent', () => {
  let component: WorkAtStepComponent;
  let fixture: ComponentFixture<WorkAtStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAtStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAtStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
