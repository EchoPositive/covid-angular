import { TestBed } from '@angular/core/testing';

import { CovidStateDataService } from './covid-state-data.service';

describe('CovidStateDataService', () => {
  let service: CovidStateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidStateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
