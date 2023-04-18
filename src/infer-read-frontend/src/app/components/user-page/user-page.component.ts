import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { UserConfigService } from '../../services/user-config-service/user-config.service';
import { EMPTY, catchError, tap, finalize } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  private userSubscription!: Subscription;

  user!: User;

  constructor(
    private authService: AuthorizationService,
    private userConfigService: UserConfigService
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  updateUserConfig(newLanguage: string) {
    this.userConfigService
      .updateUserConfig(this.user, {
        selectedLanguage: newLanguage,
      })
      .pipe(
        tap((res) => {
          console.log(res);
        }),
        catchError((err) => {
          console.log(err);
          return EMPTY;
        }),
        finalize(() => {})
      )
      .subscribe();
  }
}
