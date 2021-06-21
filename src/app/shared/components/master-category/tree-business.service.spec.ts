import { TestBed } from '@angular/core/testing';
import { TreeBusinessService } from './tree-business.service';

describe('TreeBusinessService', () => {
  let service: TreeBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
