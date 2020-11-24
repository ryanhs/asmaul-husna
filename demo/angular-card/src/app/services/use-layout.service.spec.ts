import { TestBed } from '@angular/core/testing';

import { UseLayoutService } from './use-layout.service';

describe('UseLayoutService', () => {
  let service: UseLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
