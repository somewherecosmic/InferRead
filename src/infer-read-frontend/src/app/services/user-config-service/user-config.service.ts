import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, map } from 'rxjs';
import { User, UserConfig } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserConfigService {
  userChosenLang = new BehaviorSubject('');
  constructor(private httpClient: HttpClient) {}

  authURL = environment.authURL;

  changeUserChosenLanguage(newLang: string) {
    this.userChosenLang.next(newLang);
  }

  getUserConfig(user: User): Observable<any> {
    // id as a request parameter
    return this.httpClient.get<any>(
      `${this.authURL}user/getSettings/${user.id}`
    );
  }

  updateUserConfig(user: User, userConfig: UserConfig): Observable<User> {
    // Make a PATCH request to update the User object
    return this.httpClient.patch<User>(
      `${this.authURL}user/updateSettings/${user.id}`,
      { userConfig }
    );
  }
}
