import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAnalysisComponent } from './self-analysis.component';

describe('SelfAnalysisComponent', () => {
  let component: SelfAnalysisComponent;
  let fixture: ComponentFixture<SelfAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
