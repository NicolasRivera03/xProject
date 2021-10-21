import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBuiltComponent } from './product-built.component';

describe('ProductBuiltComponent', () => {
  let component: ProductBuiltComponent;
  let fixture: ComponentFixture<ProductBuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBuiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
