import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinesscategoriesComponent } from './businesscategories.component';

describe('BusinesscategoriesComponent', () => {
  let component: BusinesscategoriesComponent;
  let fixture: ComponentFixture<BusinesscategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinesscategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinesscategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
