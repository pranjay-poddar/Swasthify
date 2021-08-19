import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasPatientComponent } from './forget-pas-patient.component';

describe('ForgetPasPatientComponent', () => {
  let component: ForgetPasPatientComponent;
  let fixture: ComponentFixture<ForgetPasPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
