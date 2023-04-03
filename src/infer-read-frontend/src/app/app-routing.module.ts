import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ReadingViewComponent } from './components/reading-view/reading-view.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { LoginAuthorizationComponent } from './components/login-auth/login-auth.component';
import { HomeComponent } from './components/home/home.component';
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
