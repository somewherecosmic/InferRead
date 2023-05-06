import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization-service/authorization.service';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { UserConfigService } from '../../services/user-config-service/user-config.service';
import { EMPTY, catchError, tap, finalize } from 'rxjs';
import { BankService } from 'src/app/services/bank-service/bank.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  private userSubscription!: Subscription;

  user!: User;
  clearBankSubscription!: Subscription;
  getBankSubscription!: Subscription;

  constructor(
    private authService: AuthorizationService,
    private userConfigService: UserConfigService,
    private bankService: BankService
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
    if (this.clearBankSubscription) this.clearBankSubscription.unsubscribe();
    if (this.getBankSubscription) this.getBankSubscription.unsubscribe();
  }

  clearBank(user: User) {
    this.bankService.clearBank(user).subscribe();
    this.bankService.getBank(user).subscribe();
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
