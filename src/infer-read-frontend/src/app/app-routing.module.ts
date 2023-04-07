import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ReadingViewComponent } from './components/reading-view/reading-view.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { LoginAuthorizationComponent } from './components/login-auth/login-auth.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AuthGuard } from './services/auth-guard/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: '', component: LoginAuthorizationComponent },
        {
          path: '',
          canActivate: [AuthGuard],
          children: [
            { path: 'overview', component: OverviewComponent },
            { path: 'read', component: ReadingViewComponent },
            { path: 'review', component: ReviewPageComponent },
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
