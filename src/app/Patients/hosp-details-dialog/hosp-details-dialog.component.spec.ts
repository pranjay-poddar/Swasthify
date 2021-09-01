import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospDetailsDialogComponent } from './hosp-details-dialog.component';

describe('HospDetailsDialogComponent', () => {
  let component: HospDetailsDialogComponent;
  let fixture: ComponentFixture<HospDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
