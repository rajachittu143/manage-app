import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditConsoleUserComponent } from './audit-console-user.component';

describe('AuditConsoleUserComponent', () => {
  let component: AuditConsoleUserComponent;
  let fixture: ComponentFixture<AuditConsoleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditConsoleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditConsoleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
