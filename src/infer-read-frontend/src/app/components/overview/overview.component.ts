import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

// TODO fetch user's books and display them here
// Need to add user ID or username to the book so we know who it belongs to
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }

  private userSubscription!: Subscription;
  user!: User;

  dummyitem = {title:"Irish Book PDF", size:"22MB", uploaddate:"Today", }
  items = [0, 0, 0]
  

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
