import { TestBed } from '@angular/core/testing';

import { PhonecaseService } from './phonecase.service';

describe('PhonecaseService', () => {
  let service: PhonecaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhonecaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
