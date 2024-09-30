import { TestBed } from '@angular/core/testing';

import { AlertasilenciosaService } from './alertasilenciosa.service';

describe('AlertasilenciosaService', () => {
  let service: AlertasilenciosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertasilenciosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
