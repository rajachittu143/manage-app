import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsterCategoryAdminComponent } from './getster-category-admin.component';

describe('GetsterCategoryAdminComponent', () => {
  let component: GetsterCategoryAdminComponent;
  let fixture: ComponentFixture<GetsterCategoryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsterCategoryAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsterCategoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
