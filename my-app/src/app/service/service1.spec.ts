import { TestBed } from '@angular/core/testing';

import { Service1 } from './service1';

describe('Service1', () => {
  let service: Service1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
