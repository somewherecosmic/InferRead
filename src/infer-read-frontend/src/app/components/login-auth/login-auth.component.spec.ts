import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuthorizationComponent } from './login-auth.component';

describe('LoginAuthorizationComponent', () => {
  let component: LoginAuthorizationComponent;
  let fixture: ComponentFixture<LoginAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
