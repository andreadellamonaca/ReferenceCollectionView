import { TestBed } from '@angular/core/testing';

import { AutoreService } from './autore.service';

describe('AutoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoreService = TestBed.get(AutoreService);
    expect(service).toBeTruthy();
  });
});
