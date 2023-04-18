import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginAuthorizationComponent } from './login-auth.component';
import { FormsModule } from '@angular/forms';

describe('LoginAuthorizationComponent', () => {
  let component: LoginAuthorizationComponent;
  let fixture: ComponentFixture<LoginAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ LoginAuthorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
