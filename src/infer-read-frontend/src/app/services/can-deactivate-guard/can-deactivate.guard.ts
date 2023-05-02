import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ReadingViewComponent } from 'src/app/components/reading-view/reading-view.component';
import { AuthorizationService } from '../authorization-service/authorization.service';
import { BankService } from '../bank-service/bank.service';
import { switchMap, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ReadingViewComponent> {

  constructor(private authService: AuthorizationService, private bankService: BankService ) {}


  canDeactivate(
    component: ReadingViewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("Inside of deactivate guard");
      console.log(localStorage.getItem("userObject"));
      
      if (confirm("Are you sure you want to finish reading?")) {
        return this.authService.user.pipe(switchMap(user => {
          return this.bankService.updateBank(user);
        }),
        tap((response) => {
          console.log("Response:", response)
        }),
        map(() => true),
        catchError(() => of(false)));
      }
      else {
        return false;
      }
  }
  
}
