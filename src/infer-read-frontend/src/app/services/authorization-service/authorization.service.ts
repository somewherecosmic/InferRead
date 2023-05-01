import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap, TimeoutConfig } from 'rxjs';
import { User, UserConfig, Bank } from '../../models/user.model';
import { Router } from '@angular/router';
import { BankService } from '../bank-service/bank.service';

interface AuthorizationResponse {
  email: string;
  token: string;
  id: string
  expiresIn: Date;
  documents: Document[];
  bank: Bank;
  userConfig: UserConfig;
}

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  // empty string fields treated as falsey, workaround for strict typechecking
  user = new BehaviorSubject<User | null>(null);
  tokenExpirationTimer: NodeJS.Timeout | null = null;

  authHandler(response: AuthorizationResponse) {
    const user = new User(
      response.email,
      response.id,
      response.userConfig,
      response.bank,
      response.token,
      response.expiresIn
    );
    this.user.next(user);
    // Have to cast to new Date() again due to problem with res deserialisation in getTime() method
    this.tokenExpirationHandler(new Date(response.expiresIn).getTime());
    localStorage.setItem('userObject', JSON.stringify(user));
    this.bankService.known = new Set(response.bank.known);
    this.bankService.learning = response.bank.learning;
  }

  signup(email: string, password: string) {
    console.log(email, password);
    return this.http
      .post<AuthorizationResponse>(
        'http://localhost:3000/auth/signup',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        tap((res) => {
          this.authHandler(res);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthorizationResponse>(
        'http://localhost:3000/auth/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        tap((res) => {
          this.authHandler(res);
        })
      );
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userObject');
    this.router.navigate(['']);
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  autoLog() {
    const userData = localStorage.getItem('userObject');
    if (userData) {
      const userObject = JSON.parse(userData);
      const cachedUser = new User(
        userObject.email,
        userObject.id,
        userObject.bank,
        userObject.userConfig,
        userObject._token,
        new Date(userObject._tokenExpires)
      );

      if (cachedUser.token) {
        this.user.next(cachedUser);
        // This accounts for the remaining time left on the token
        this.tokenExpirationHandler(
          new Date(userObject._tokenExpires).getTime() - new Date().getTime()
        );
      }
    }
  }

  // Want to check for time left on json web token every time a new subject event is emitted
  tokenExpirationHandler(expirationDuration: number) {
    // BMcQ Comment: Bug?, expirationDuration is always 0
    // this.tokenExpirationTimer = setTimeout(() => {
    //   this.logout();
    // }, expirationDuration);
    // console.log(expirationDuration);
  }

  getUserId() {
    return JSON.parse(localStorage.getItem('userObject')).id;
  }

  constructor(private http: HttpClient, private router: Router, private bankService: BankService) {}
}
