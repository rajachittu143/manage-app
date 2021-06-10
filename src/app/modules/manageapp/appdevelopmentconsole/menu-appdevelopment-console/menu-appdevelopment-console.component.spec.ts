import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAppdevelopmentConsoleComponent } from './menu-appdevelopment-console.component';

describe('MenuAppdevelopmentConsoleComponent', () => {
  let component: MenuAppdevelopmentConsoleComponent;
  let fixture: ComponentFixture<MenuAppdevelopmentConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAppdevelopmentConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAppdevelopmentConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
