import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLaunchScreenImagesComponent } from './audit-launch-screen-images.component';

describe('AuditLaunchScreenImagesComponent', () => {
  let component: AuditLaunchScreenImagesComponent;
  let fixture: ComponentFixture<AuditLaunchScreenImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditLaunchScreenImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditLaunchScreenImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
