import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomappsComponent } from './customapps.component';

describe('CustomappsComponent', () => {
  let component: CustomappsComponent;
  let fixture: ComponentFixture<CustomappsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomappsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
