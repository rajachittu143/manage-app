import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonBusinessCategoryComponent } from './reason-business-category.component';

describe('ReasonBusinessCategoryComponent', () => {
  let component: ReasonBusinessCategoryComponent;
  let fixture: ComponentFixture<ReasonBusinessCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonBusinessCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonBusinessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
