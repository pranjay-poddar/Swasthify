import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPatientComponent } from './dashboard-patient.component';

describe('DashboardPatientComponent', () => {
  let component: DashboardPatientComponent;
  let fixture: ComponentFixture<DashboardPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
