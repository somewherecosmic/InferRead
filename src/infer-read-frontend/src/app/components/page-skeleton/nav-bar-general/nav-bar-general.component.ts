import { Component, OnInit } from '@angular/core';
import { faSignOut, faBook, faEraser, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
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
  constructor() { }

  ngOnInit(): void {
  }

}
