import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchscreenimagesComponent } from './launchscreenimages.component';

describe('LaunchscreenimagesComponent', () => {
  let component: LaunchscreenimagesComponent;
  let fixture: ComponentFixture<LaunchscreenimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchscreenimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchscreenimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
