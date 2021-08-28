import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductsComponent } from './our-products.component';

describe('OurProductsComponent', () => {
  let component: OurProductsComponent;
  let fixture: ComponentFixture<OurProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
