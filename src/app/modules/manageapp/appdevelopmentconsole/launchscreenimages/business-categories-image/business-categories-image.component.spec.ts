import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCategoriesImageComponent } from './business-categories-image.component';

describe('BusinessCategoriesImageComponent', () => {
  let component: BusinessCategoriesImageComponent;
  let fixture: ComponentFixture<BusinessCategoriesImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCategoriesImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCategoriesImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
