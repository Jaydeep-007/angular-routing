import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOfferComponent } from './product-offer.component';

describe('ProductOfferComponent', () => {
  let component: ProductOfferComponent;
  let fixture: ComponentFixture<ProductOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
