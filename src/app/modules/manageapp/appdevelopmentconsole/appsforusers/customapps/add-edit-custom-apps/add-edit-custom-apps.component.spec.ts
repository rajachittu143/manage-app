import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustomAppsComponent } from './add-edit-custom-apps.component';

describe('AddEditCustomAppsComponent', () => {
  let component: AddEditCustomAppsComponent;
  let fixture: ComponentFixture<AddEditCustomAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCustomAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCustomAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
