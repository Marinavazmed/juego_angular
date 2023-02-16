import { TestBed } from '@angular/core/testing';

import { FraseServiceService } from './frase-service.service';

describe('FraseServiceService', () => {
  let service: FraseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
