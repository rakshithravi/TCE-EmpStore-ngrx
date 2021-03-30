import { TestBed } from '@angular/core/testing';

import { EmpFacadeService } from './emp-facade.service';

describe('EmpFacadeService', () => {
  let service: EmpFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
