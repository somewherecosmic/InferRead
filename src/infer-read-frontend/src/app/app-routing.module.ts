import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ReadingViewComponent } from './components/reading-view/reading-view.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/auth/auth.guard';


@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
      { path: 'read', component: ReadingViewComponent },
      { path: 'upload', component: UploadPageComponent },
      { path: 'review', component: ReviewPageComponent },
      {path: 'auth', component: AuthComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ],
    { initialNavigation: 'enabledBlocking'}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
