import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { UserConfigService } from 'src/app/services/user-config-service/user-config.service';
import { EMPTY, catchError, tap, finalize, throwError } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.scss'],
})
export class LoginAuthorizationComponent implements OnInit {
  isLoading: Boolean = false;
  error: string = '';

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private userConfigService: UserConfigService,
  ) {}

  ngOnInit(): void {}

  // Could refactor both auth functions here into one observable object and subscribe to it
  // Conditional logic based on either using authService login or signup

  onLogIn(authForm: NgForm) {
    this.isLoading = true;
    this.authService
      .login(authForm.value.email, authForm.value.password)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.error = 'An error occurred';
          this.isLoading = false;
          return throwError(() => new Error(err));
        })
      )
      .subscribe((res) => {
        console.log(res);
        this.isLoading = false;
      this.userConfigService.userChosenLang.next(res.userConfig.selectedLanguage);
        this.router.navigate(['/overview']);
      });
    authForm.reset();
  }

  onSignUp(authForm: NgForm) {
    this.isLoading = true;
    this.authService
      .signup(authForm.value.email, authForm.value.password)
      .pipe(
        tap((res) => {
          console.log(res);
          this.router.navigate(['/overview']);
        }),
        catchError((err) => {
          console.log(err);
          this.error = 'An error occurred';
          return EMPTY;
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
    authForm.reset();
  }
}
