import {TestBed} from '@angular/core/testing';

import {
    HttpClientTestingModule,
    HttpTestingController
  } from '@angular/common/http/testing';

import {LocationService} from './location.service';

describe('LocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LocationService]
  }));

  it('should be created', () => {
    const service: LocationService = TestBed.get(LocationService);
    expect(service).toBeTruthy();
  });
});
