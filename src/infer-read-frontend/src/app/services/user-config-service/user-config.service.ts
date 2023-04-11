import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, map } from 'rxjs';
import { User, UserConfig } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserConfigService {
  userChosenLang = new BehaviorSubject('');
  constructor(private httpClient: HttpClient) {}

  changeUserChosenLanguage(newLang: string) {
    this.userChosenLang.next(newLang);
  }

  getUserConfig(user: User): Observable<any> {
    // id as a request parameter
    return this.httpClient.get<any>(
      `http://localhost:3000/user/getSettings/${user.id}`
    );
  }

  updateUserConfig(user: User, userConfig: UserConfig): Observable<User> {
    // Make a PATCH request to update the User object
    return this.httpClient.patch<User>(
      `http://localhost:3000/user/updateSettings/${user.id}`,
      { userConfig }
    );
  }
}
