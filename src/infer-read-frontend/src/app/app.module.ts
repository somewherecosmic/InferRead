import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/utility/page-skeleton/header/header.component';
import { NavBarGeneralComponent } from './components/utility/page-skeleton/nav-bar-general/nav-bar-general.component';
import { OverviewComponent } from './components/view-components/overview/overview.component';
import { ReadingViewComponent } from './components/view-components/reading-view/reading-view.component';
import { ReviewPageComponent } from './components/view-components/review-page/review-page.component';
import { LoginAuthorizationComponent } from './components/utility/login-auth/login-auth.component';
import { LoadingSpinnerComponent } from './components/utility/page-skeleton/loading-spinner/loading-spinner.component';
import { HomeComponent } from './components/view-components/landing/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './services/auth-interceptor-service/auth-interceptor.service';
import { UserPageComponent } from './components/view-components/user-page/user-page.component';
import { HeroComponent } from './components/view-components/landing/hero/hero.component';
import { FeaturesComponent } from './components/view-components/landing/features/features.component';
import { ReadingCardComponent } from './components/utility/reading-card/reading-card.component';
import { DropdownComponent } from './components/utility/dropdown/dropdown.component';
import { ModalComponent } from './components/utility/modal/modal.component';
import { FileUploadComponent } from './components/utility/file-upload/file-upload.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarGeneralComponent,
    OverviewComponent,
    ReadingViewComponent,
    ReviewPageComponent,
    LoginAuthorizationComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    UserPageComponent,
    HeroComponent,
    FeaturesComponent,
    ReadingCardComponent,
    DropdownComponent,
    ModalComponent,
    FileUploadComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    // DxSpeedDialActionModule,
    // DxPopupModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
