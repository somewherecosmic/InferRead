import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ReadingViewComponent } from 'src/app/components/view-components/reading-view/reading-view.component';
import { AuthorizationService } from '../authorization-service/authorization.service';
import { BankService } from '../bank-service/bank.service';
import { switchMap, map, tap } from 'rxjs';
import { ReviewPageComponent } from 'src/app/components/view-components/review-page/review-page.component';

@Injectable({
  providedIn: 'root'
})
export class ReviewDeactivateGuard  {

  constructor(private authService: AuthorizationService, private bankService: BankService ) {}


  canDeactivate(
    component: ReviewPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.canDeactivate();
}
}
