import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistergetsterComponent } from './registergetster.component';

describe('RegistergetsterComponent', () => {
  let component: RegistergetsterComponent;
  let fixture: ComponentFixture<RegistergetsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistergetsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistergetsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
