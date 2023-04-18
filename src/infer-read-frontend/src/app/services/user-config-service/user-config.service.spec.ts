import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserConfigService } from './user-config.service';

describe('UserConfigService', () => {
  let service: UserConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
