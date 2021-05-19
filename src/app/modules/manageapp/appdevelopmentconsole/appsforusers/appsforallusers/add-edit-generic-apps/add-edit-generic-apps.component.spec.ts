import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGenericAppsComponent } from './add-edit-generic-apps.component';

describe('AddEditGenericAppsComponent', () => {
  let component: AddEditGenericAppsComponent;
  let fixture: ComponentFixture<AddEditGenericAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGenericAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGenericAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
