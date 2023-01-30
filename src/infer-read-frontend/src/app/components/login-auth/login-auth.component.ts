import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';

@Component({
  selector: 'app-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.scss']
})
export class LoginAuthorizationComponent implements OnInit {

  isLoading: Boolean = false;
  error: string = '';

  constructor(private authService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }

  // Could refactor both auth functions here into one observable object and subscribe to it
  // Conditional logic based on either using authService login or signup 

  onLogIn(authForm: NgForm) {
    this.isLoading = true;
    this.authService.login(authForm.value.email, authForm.value.password).subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this.router.navigate(['/overview']);
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
      this.router.navigate(['/overview']);
    }, 
    err => {
      console.log(err);
      this.error = "An error occurred";
      this.isLoading = false;
    });
    authForm.reset();
  }
}
