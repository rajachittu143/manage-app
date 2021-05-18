import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsterAccessControlComponent } from './getster-access-control.component';

describe('GetsterAccessControlComponent', () => {
  let component: GetsterAccessControlComponent;
  let fixture: ComponentFixture<GetsterAccessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetsterAccessControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetsterAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
