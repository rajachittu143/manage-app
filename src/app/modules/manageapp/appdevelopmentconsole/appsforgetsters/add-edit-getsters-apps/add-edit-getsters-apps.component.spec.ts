import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGetstersAppsComponent } from './add-edit-getsters-apps.component';

describe('AddEditGetstersAppsComponent', () => {
  let component: AddEditGetstersAppsComponent;
  let fixture: ComponentFixture<AddEditGetstersAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGetstersAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGetstersAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
