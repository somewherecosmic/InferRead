import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  private userSubscription!: Subscription;
  user!: User;

  

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      console.log(user);
    }, err => {
      console.log(err);
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate([''])
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }


}
