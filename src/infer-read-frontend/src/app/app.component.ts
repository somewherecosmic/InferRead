import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './services/authorization-service/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'infer-read-frontend';

  basilArr: String[] = ["baz", "mac", "q"];

  constructor(private authService: AuthorizationService) {}
  
  ngOnInit() {
    this.authService.autoLog();
  }

}