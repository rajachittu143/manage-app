import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBusinessCountriesComponent } from './audit-business-countries.component';

describe('AuditBusinessCountriesComponent', () => {
  let component: AuditBusinessCountriesComponent;
  let fixture: ComponentFixture<AuditBusinessCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditBusinessCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditBusinessCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
