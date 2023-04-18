import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthInterceptorService } from './auth-interceptor.service';

describe('AuthInterceptorService', () => {
  let service: AuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthInterceptorService]  
    });
    service = TestBed.inject(AuthInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
