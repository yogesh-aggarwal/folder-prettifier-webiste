import { TestBed } from '@angular/core/testing';

import { EulaService } from './eula.service';

describe('EulaService', () => {
  let service: EulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
