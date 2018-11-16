import { TestBed } from '@angular/core/testing';

import { ForecastService } from './forecast.service';
import {
    HttpClientTestingModule, HttpTestingController
} from '@angular/common/http/testing';

describe('ForecastService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports : [HttpClientTestingModule],
        providers: [ForecastService]
    }));

    it('should be created', () => {
        const service: ForecastService = TestBed.get(ForecastService);
        expect(service).toBeTruthy();
    });
});
