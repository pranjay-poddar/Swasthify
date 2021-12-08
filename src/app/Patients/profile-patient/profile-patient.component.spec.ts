import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePatientComponent } from './profile-patient.component';

describe('ProfilePatientComponent', () => {
  let component: ProfilePatientComponent;
  let fixture: ComponentFixture<ProfilePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
