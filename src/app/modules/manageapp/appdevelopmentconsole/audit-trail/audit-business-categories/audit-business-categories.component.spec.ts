import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditBusinessCategoriesComponent } from './audit-business-categories.component';

describe('AuditBusinessCategoriesComponent', () => {
  let component: AuditBusinessCategoriesComponent;
  let fixture: ComponentFixture<AuditBusinessCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditBusinessCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditBusinessCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
