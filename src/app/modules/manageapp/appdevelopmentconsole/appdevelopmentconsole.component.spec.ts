import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdevelopmentconsoleComponent } from './appdevelopmentconsole.component';

describe('AppdevelopmentconsoleComponent', () => {
  let component: AppdevelopmentconsoleComponent;
  let fixture: ComponentFixture<AppdevelopmentconsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppdevelopmentconsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdevelopmentconsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
