import { TestBed } from '@angular/core/testing';

import { GurbaniTuksService } from './gurbani-tuks.service';

describe('GurbaniTuksService', () => {
  let service: GurbaniTuksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GurbaniTuksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
