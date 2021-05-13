import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageapphomeComponent } from './manageapphome.component';

describe('ManageapphomeComponent', () => {
  let component: ManageapphomeComponent;
  let fixture: ComponentFixture<ManageapphomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageapphomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageapphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
