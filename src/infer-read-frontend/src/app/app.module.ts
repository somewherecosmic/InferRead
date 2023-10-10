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
import { HeaderComponent } from './components/page-skeleton/header/header.component';
import { NavBarGeneralComponent } from './components/page-skeleton/nav-bar-general/nav-bar-general.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ReadingViewComponent } from './components/reading-view/reading-view.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { LoginAuthorizationComponent } from './components/login-auth/login-auth.component';
import { LoadingSpinnerComponent } from './components/page-skeleton/loading-spinner/loading-spinner.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptorService } from './services/auth-interceptor-service/auth-interceptor.service';
import { UserPageComponent } from './components/user-page/user-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ReadingCardComponent } from './components/reading-card/reading-card.component';

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
