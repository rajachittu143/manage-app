import { TestBed } from '@angular/core/testing';
import { TreeCountryService } from './tree-country.service';


describe('TreeCountryService', () => {
  let service: TreeCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
