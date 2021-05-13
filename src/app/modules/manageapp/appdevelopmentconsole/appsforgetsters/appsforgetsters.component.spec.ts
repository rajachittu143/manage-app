import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsforgetstersComponent } from './appsforgetsters.component';

describe('AppsforgetstersComponent', () => {
  let component: AppsforgetstersComponent;
  let fixture: ComponentFixture<AppsforgetstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsforgetstersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsforgetstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
