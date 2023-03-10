import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

  private userSubscription!: Subscription;
  user!: User;

  

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      console.log(user);
    }, err => {
      console.log(err);
    });
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
