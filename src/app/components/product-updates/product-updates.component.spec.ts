import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdatesComponent } from './product-updates.component';

describe('ProductUpdatesComponent', () => {
  let component: ProductUpdatesComponent;
  let fixture: ComponentFixture<ProductUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
