import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AutenticacaoGuard } from './autenticacao.guard';
import { LoginService } from './login.service';

describe('AutenticacaoGuard', () => {
  let guard: AutenticacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LoginService]
    });
    guard = TestBed.inject(AutenticacaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
