import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { UserConfigService } from 'src/app/services/user-config-service/user-config.service';
import { User, UserConfig } from 'src/app/models/user.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userDropdownOptions: any[] = [
    { name: 'Profile', icon: 'alignleft' },
    { name: 'Logout', icon: 'aligncenter' },
  ];

  constructor(
    private authService: AuthorizationService,
    private router: Router,
    private userConfigService: UserConfigService
  ) {
    router.events.subscribe((val) => {
      this.currentPage = this.router.url;
    });
  }

  currentPage = this.router.url;
  user$: Observable<User>;
  userConfig$: Observable<{ userConfig: UserConfig }>;

  ngOnInit(): void {
    this.user$ = this.authService.user
    this.userConfig$ = this.user$.pipe(
      switchMap((user: any) => this.userConfigService.getUserConfig(user))
    );
  }

  ngOnDestroy(): void {
    this.userConfigService.userChosenLang.unsubscribe();
  }

  dropdownItemSelected(optionSelected: string) {
    switch (optionSelected) {
      case 'Profile': {
        this.router.navigate(['user']);
        break;
      }
      case 'Logout': {
        this.authService.logout();
        this.router.navigate(['']);
        break;
      }
      default: {
        break;
      }
    }
  }
}
