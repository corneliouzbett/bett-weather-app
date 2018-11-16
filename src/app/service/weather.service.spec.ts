import {TestBed} from '@angular/core/testing';

import {WeatherService} from './weather.service';

import {
    HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [WeatherService]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });
});
