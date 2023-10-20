import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './components/view-components/overview/overview.component';
import { ReadingViewComponent } from './components/view-components/reading-view/reading-view.component';
import { ReviewPageComponent } from './components/view-components/review-page/review-page.component';
import { LoginAuthorizationComponent } from './components/utility/login-auth/login-auth.component';
import { UserPageComponent } from './components/view-components/user-page/user-page.component';
import { AuthGuard } from './services/auth-guard/auth.guard';
import { ReadingDeactivateGuard } from './services/reading-deactivate-guard/reading-deactivate.guard';
import { ReviewDeactivateGuard } from './services/review-deactivate-guard/review-deactivate.guard';
import { HomeComponent } from './components/view-components/landing/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        {
          path: '',
          canActivate: [AuthGuard],
          children: [
            { path: 'overview', component: OverviewComponent },
            { path: 'read', component: ReadingViewComponent, canDeactivate: [ReadingDeactivateGuard] },
            { path: 'review', component: ReviewPageComponent, canDeactivate: [ReviewDeactivateGuard] },
            { path: 'user', component: UserPageComponent },
          ],
        },
        { path: '**', redirectTo: '' },
      ]
      //{ initialNavigation: 'enabledBlocking'}
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
