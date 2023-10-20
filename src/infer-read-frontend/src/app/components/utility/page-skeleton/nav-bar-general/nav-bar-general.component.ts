import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOut, faBook, faEraser, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { AuthorizationService } from '../../../../services/authorization-service/authorization.service';

@Component({
  selector: 'app-nav-bar-general',
  templateUrl: './nav-bar-general.component.html',
  styleUrls: ['./nav-bar-general.component.scss']
})
export class NavBarGeneralComponent implements OnInit {
  faSignOut = faSignOut;
  faBook = faBook;
  faEraser = faEraser;
  faFolderOpen = faFolderOpen;
  constructor(private authService: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
