import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'infer-read-frontend';

  basilArr: String[] = ["baz", "mac", "q"];

  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    this.authService.autoLog();
  }

}