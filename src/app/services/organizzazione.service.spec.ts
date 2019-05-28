import { TestBed } from '@angular/core/testing';

import { OrganizzazioneService } from './organizzazione.service';

describe('OrganizzazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizzazioneService = TestBed.get(OrganizzazioneService);
    expect(service).toBeTruthy();
  });
});
