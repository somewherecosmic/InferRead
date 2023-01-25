import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject, tap } from 'rxjs';
import { User } from './user.model';

interface AuthResponse {
  email: string,
  token: string,
  id: string
  expiresIn: Date
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new Subject<User>();


  authHandler(response: AuthResponse) {
    const user = new User(response.email, response.id, response.token, response.expiresIn);
    this.user.next(user);
  }


  signup(email: string, password: string) {
    console.log(email, password);
    return this.http.post<AuthResponse>('http://localhost:3000/auth/signup', {
      email: email,
      password: password
    },
    {
      headers: {
      'Content-Type' : 'application/json'
    }
  }).pipe(tap(res => {
    this.authHandler(res);
  }))
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>('http://localhost:3000/auth/login', {
      email: email,
      password: password
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(tap(res => {
      this.authHandler(res);
    }));
  }

  constructor(private http: HttpClient) { }
}
