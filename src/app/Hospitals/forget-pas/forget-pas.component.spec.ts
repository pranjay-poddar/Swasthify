import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasComponent } from './forget-pas.component';

describe('ForgetPasComponent', () => {
  let component: ForgetPasComponent;
  let fixture: ComponentFixture<ForgetPasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
