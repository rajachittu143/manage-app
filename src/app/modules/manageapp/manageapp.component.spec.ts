import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageappComponent } from './manageapp.component';

describe('ManageappComponent', () => {
  let component: ManageappComponent;
  let fixture: ComponentFixture<ManageappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
