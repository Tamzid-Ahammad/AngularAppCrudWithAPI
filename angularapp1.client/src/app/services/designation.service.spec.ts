import { TestBed } from '@angular/core/testing';

import { DesgnationService } from './desgnation.service';

describe('DesgnationService', () => {
  let service: DesgnationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesgnationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
