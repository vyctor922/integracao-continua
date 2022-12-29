import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from '../service/login.service';

import { ErroInterceptor } from './erro.interceptor';

describe('ErroInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ],
    providers: [
      ErroInterceptor,
      LoginService
    ]
  }));

  it('should be created', () => {
    const interceptor: ErroInterceptor = TestBed.inject(ErroInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
