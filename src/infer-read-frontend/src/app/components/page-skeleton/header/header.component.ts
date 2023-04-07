import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userDropdownOptions: any[] = [
    { name: 'Profile', icon: 'alignleft' },
    { name: 'Options', icon: 'alignright' },
    { name: 'Logout', icon: 'aligncenter' },
  ];

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {
    router.events.subscribe((val) => {
      this.currentPage = this.router.url;
    });
  }

  currentPage = this.router.url;

  ngOnInit(): void {}

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
        console.log('Other');
        break;
      }
    }
  }

  onClick(): void {
    alert('This will route to the homepage at some point');
  }
}
