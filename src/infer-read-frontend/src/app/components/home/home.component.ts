import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { User } from '../../models/user.model'; 
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User | null = null;
  userSubscription: Subscription;


  constructor(private authService: AuthorizationService) {
    this.userSubscription = this.authService.user.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
 
}
