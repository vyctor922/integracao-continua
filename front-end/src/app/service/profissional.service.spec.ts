import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProfissionalService } from './profissional.service';

describe('ProfissionalService', () => {
  let service: ProfissionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProfissionalService]
    });
    service = TestBed.inject(ProfissionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
