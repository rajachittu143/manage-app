import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleuserComponent } from './consoleuser.component';

describe('ConsoleuserComponent', () => {
  let component: ConsoleuserComponent;
  let fixture: ComponentFixture<ConsoleuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
