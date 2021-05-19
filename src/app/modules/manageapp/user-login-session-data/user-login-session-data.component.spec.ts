import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginSessionDataComponent } from './user-login-session-data.component';

describe('UserLoginSessionDataComponent', () => {
  let component: UserLoginSessionDataComponent;
  let fixture: ComponentFixture<UserLoginSessionDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginSessionDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginSessionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
