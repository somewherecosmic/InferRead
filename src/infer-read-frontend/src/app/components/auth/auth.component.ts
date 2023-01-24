import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogIn(authForm: NgForm) {
    console.log(authForm);
    authForm.reset();
  }

  onSignUp(authForm: NgForm) {
    this.authService.signup(authForm.value.email, authForm.value.password).subscribe((res) => {
      console.log(res);
    }, 
    err => {
      console.log(err);
    });
    authForm.reset();
  }
}
