import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UnidadeService } from './unidade.service';

describe('UnidadeService', () => {
  let service: UnidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UnidadeService]
    });
    service = TestBed.inject(UnidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
