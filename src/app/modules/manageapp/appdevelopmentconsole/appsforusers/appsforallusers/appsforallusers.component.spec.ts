import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsforallusersComponent } from './appsforallusers.component';

describe('AppsforallusersComponent', () => {
  let component: AppsforallusersComponent;
  let fixture: ComponentFixture<AppsforallusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsforallusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsforallusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
