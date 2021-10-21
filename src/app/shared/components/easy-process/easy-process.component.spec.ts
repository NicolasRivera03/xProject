import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyProcessComponent } from './easy-process.component';

describe('EasyProcessComponent', () => {
  let component: EasyProcessComponent;
  let fixture: ComponentFixture<EasyProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
