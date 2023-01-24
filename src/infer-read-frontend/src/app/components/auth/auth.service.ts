import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signup(email: string, password: string) {
    console.log(email, password);
    return this.http.post('http://localhost:3000/auth/signup', {
      email: email,
      password: password
    },
    {
      headers: {
      'Content-Type' : 'application/json'
    }
  });
  }

  constructor(private http: HttpClient) { }
}
