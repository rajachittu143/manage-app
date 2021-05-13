import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsforusersComponent } from './appsforusers.component';

describe('AppsforusersComponent', () => {
  let component: AppsforusersComponent;
  let fixture: ComponentFixture<AppsforusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsforusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsforusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
