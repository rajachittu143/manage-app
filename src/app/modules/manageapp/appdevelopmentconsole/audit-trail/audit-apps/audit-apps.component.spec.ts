import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditAppsComponent } from './audit-apps.component';

describe('AuditAppsComponent', () => {
  let component: AuditAppsComponent;
  let fixture: ComponentFixture<AuditAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
