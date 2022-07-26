import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';


import { UnitsService } from './units.service';

describe('UnitsService', () => {
  let service: UnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(UnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
