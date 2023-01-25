import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoading: Boolean = false;
  error: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // Could refactor both auth functions here into one observable object and subscribe to it
  // Conditional logic based on either using authService login or signup 

  onLogIn(authForm: NgForm) {
    this.isLoading = true;
    this.authService.login(authForm.value.email, authForm.value.password).subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this.router.navigate(['']);
    },
    err => {
      console.log(err);
      this.error = "An error occurred";
      this.isLoading = false;
    })
    authForm.reset();
  }

  onSignUp(authForm: NgForm) {
    this.isLoading = true;
    this.authService.signup(authForm.value.email, authForm.value.password).subscribe((res) => {
      console.log(res);
      this.isLoading = false;
      this.router.navigate(['']);
    }, 
    err => {
      console.log(err);
      this.error = "An error occurred";
      this.isLoading = false;
    });
    authForm.reset();
  }
}
