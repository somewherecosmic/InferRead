import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ReadingViewComponent } from './components/reading-view/reading-view.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { AuthComponent } from './components/auth/auth.component';



@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: 'overview', component: OverviewComponent },
      { path: 'read', component: ReadingViewComponent },
      { path: 'upload', component: UploadPageComponent },
      { path: 'review', component: ReviewPageComponent },
      {path: 'auth', component: AuthComponent }
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
    { initialNavigation: 'enabledBlocking'}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
