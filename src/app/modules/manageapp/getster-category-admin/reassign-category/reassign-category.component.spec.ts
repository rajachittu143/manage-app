import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignCategoryComponent } from './reassign-category.component';

describe('ReassignCategoryComponent', () => {
  let component: ReassignCategoryComponent;
  let fixture: ComponentFixture<ReassignCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReassignCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
