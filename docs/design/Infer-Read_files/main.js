"use strict";
(self["webpackChunkinfer_read_frontend"] = self["webpackChunkinfer_read_frontend"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/overview/overview.component */ 9911);
/* harmony import */ var _components_reading_view_reading_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/reading-view/reading-view.component */ 555);
/* harmony import */ var _components_review_page_review_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/review-page/review-page.component */ 8158);
/* harmony import */ var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-page/user-page.component */ 6720);
/* harmony import */ var _services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard/auth.guard */ 6256);
/* harmony import */ var _services_reading_deactivate_guard_reading_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/reading-deactivate-guard/reading-deactivate.guard */ 4206);
/* harmony import */ var _services_review_deactivate_guard_review_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/review-deactivate-guard/review-deactivate.guard */ 9648);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);











class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot([{
    path: '',
    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent
  }, {
    path: '',
    canActivate: [_services_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard],
    children: [{
      path: 'overview',
      component: _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_0__.OverviewComponent
    }, {
      path: 'read',
      component: _components_reading_view_reading_view_component__WEBPACK_IMPORTED_MODULE_1__.ReadingViewComponent,
      canDeactivate: [_services_reading_deactivate_guard_reading_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__.ReadingDeactivateGuard]
    }, {
      path: 'review',
      component: _components_review_page_review_page_component__WEBPACK_IMPORTED_MODULE_2__.ReviewPageComponent,
      canDeactivate: [_services_review_deactivate_guard_review_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__.ReviewDeactivateGuard]
    }, {
      path: 'user',
      component: _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__.UserPageComponent
    }]
  }, {
    path: '**',
    redirectTo: ''
  }]
  //{ initialNavigation: 'enabledBlocking'}
  ), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/authorization-service/authorization.service */ 9141);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
  constructor(authService) {
    this.authService = authService;
    this.title = 'infer-read-frontend';
  }
  ngOnInit() {
    this.authService.autoLog();
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  consts: [[1, "body"], [1, "page-content"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet")(2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  styles: ["body[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\nbody[_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  height: 92vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUVSIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAucGFnZS1jb250ZW50e1xyXG4gICAgICAgIGhlaWdodDogOTJ2aDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_page_skeleton_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page-skeleton/header/header.component */ 6795);
/* harmony import */ var _components_page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-skeleton/nav-bar-general/nav-bar-general.component */ 86);
/* harmony import */ var _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/overview/overview.component */ 9911);
/* harmony import */ var _components_reading_view_reading_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/reading-view/reading-view.component */ 555);
/* harmony import */ var _components_review_page_review_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/review-page/review-page.component */ 8158);
/* harmony import */ var _components_login_auth_login_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login-auth/login-auth.component */ 3742);
/* harmony import */ var _components_page_skeleton_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-skeleton/loading-spinner/loading-spinner.component */ 1411);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _services_auth_interceptor_service_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth-interceptor-service/auth-interceptor.service */ 4055);
/* harmony import */ var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user-page/user-page.component */ 6720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);


















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _services_auth_interceptor_service_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_10__.AuthInterceptorService,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_page_skeleton_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__.NavBarGeneralComponent, _components_overview_overview_component__WEBPACK_IMPORTED_MODULE_4__.OverviewComponent, _components_reading_view_reading_view_component__WEBPACK_IMPORTED_MODULE_5__.ReadingViewComponent, _components_review_page_review_page_component__WEBPACK_IMPORTED_MODULE_6__.ReviewPageComponent, _components_login_auth_login_auth_component__WEBPACK_IMPORTED_MODULE_7__.LoginAuthorizationComponent, _components_page_skeleton_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__.LoadingSpinnerComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__.HomeComponent, _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__.UserPageComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authorization-service/authorization.service */ 9141);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class HomeComponent {
  constructor(authService) {
    this.authService = authService;
    this.user = null;
    this.userSubscription = this.authService.user.subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 15,
  vars: 0,
  consts: [[1, "landing__hero"], [1, "landing__header"], [1, "landing__welcome"], [1, "landing__welcome-text"], ["type", "email", "placeholder", "email"], ["type", "password", "placeholder", "password"], [1, "landing__form-buttons"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "InferRead");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Learn with your favourite books ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4)(9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Sign up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Log in");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["@font-face {\n  font-family: \"Inter\";\n  src: url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap);\n}\n@font-face {\n  font-family: \"Libre Baskerville\";\n  src: url(https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.landing__hero[_ngcontent-%COMP%] {\n  background-color: rgba(249, 237, 177, 0.62);\n  max-width: 100%;\n}\n\n.landing__header[_ngcontent-%COMP%] {\n  display: block;\n  font-family: \"Libre Baskerville\";\n  margin: 0 auto;\n}\n.landing__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n  font-size: 2rem;\n  max-width: 33%;\n  padding: 1rem;\n  margin: 0 auto;\n  text-align: center;\n}\n\n@media (min-width: 680px) {\n  .landing__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n    padding: 1.5rem;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zYXNzL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0E7RUFDSSxvQkFBQTtFQUNBLGtGQUFBO0FDakNKO0FEb0NBO0VBQ0ksZ0NBQUE7RUFDQSw4RkFBQTtBQ2xDSjtBQ0pBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRE1GOztBQVRBO0VBQ0ksMkNENENTO0VDM0NULGVBQUE7QUFZSjs7QUFUQTtFQUNJLGNBQUE7RUFDQSxnQ0RrQ2M7RUNqQ2QsY0FBQTtBQVlKO0FBVkk7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFZUjs7QUFSQTtFQUlRO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQVFWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbmZlclJlYWQgdmFyaWFibGVzIC0gZnJvbSBtb2NrdXAgZGVzaWduXG5cbi8vIE1pbi13aWR0aCBmb3IgZGVza3RvcCAtPiBtZWRpYSBxdWVyaWVzXG4kd2lkdGg6IDY4MHB4OyBcblxuLy8gRm9udCBzaXplc1xuJGZvbnQtc2l6ZXMtc206IChcbiAgICBcIjQwMFwiOiAxcmVtLFxuICAgIFwiNTAwXCI6IDEuMTI1cmVtLFxuICAgIFwiNjAwXCI6IDEuMjVyZW0sXG4gICAgXCI3MDBcIjogMS4zNzVyZW0sXG4gICAgXCI4MDBcIjogMnJlbSxcbiAgICBcIjkwMFwiOiAzcmVtXG4pO1xuXG5cbiRmb250LXNpemVzLWRzOiAoXG4gICAgXCI0MDBcIjogMS4xMjVyZW0sXG4gICAgXCI1MDBcIjogMS4yNXJlbSxcbiAgICBcIjYwMFwiOiAxLjM3NXJlbSxcbiAgICBcIjcwMFwiOiAyLjI1cmVtLFxuICAgIFwiODAwXCI6IDNyZW0sXG4gICAgXCI5MDBcIjogNHJlbVxuKTtcblxuQGZ1bmN0aW9uIGdldE1vYmlsZUZvbnQoJGZvbnQtc2l6ZSkge1xuICAgIEByZXR1cm4gbWFwLWdldCgkZm9udC1zaXplcy1zbSwgJGZvbnQtc2l6ZSk7XG59O1xuXG5AZnVuY3Rpb24gZ2V0RGVza3RvcEZvbnQoJGZvbnQtc2l6ZSkge1xuICAgIEByZXR1cm4gbWFwLWdldCgkZm9udC1zaXplcy1kcywgJGZvbnQtc2l6ZSk7XG59O1xuXG4vLyBGb250IGZhbWlsaWVzXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0ludGVyJztcbiAgICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXApO1xufTtcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZSc7XG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcbn07XG5cbiRpci1mb250LXByaW1hcnk6ICdMaWJyZSBCYXNrZXJ2aWxsZSc7XG4kaXItZm9udC1zZWNvbmRhcnk6ICdJbnRlcic7XG5cbi8vIENvbG9yc1xuJGlyLXByaW1hcnk6IHJnYmEoMjQ5LCAyMzcsIDE3NywgMC42Mik7XG4kaXItc2Vjb25kYXJ5OiByZ2JhKDk4LCA5NCwgNzgsIDEpO1xuJGlyLXNoYWRvdzogcmdiYSgxNzYsIDE3MSwgMTUzLCAxKTtcbiRpci1wb3NpdGl2ZTogcmdiYSgxMDUsIDE5NiwgMTgxLCAwLjcpO1xuXG4vLyB1dGlsdHlcbkBtaXhpbiBmbGV4R3JvdXAoJGZsZXgtZGlyZWN0aW9uLCAkanVzdGlmeSwgJGFsaWduKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy9zdHlsZXMuc2Nzc1wiO1xuXG5cbi5sYW5kaW5nX19oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaXItcHJpbWFyeTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5sYW5kaW5nX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiAkaXItZm9udC1wcmltYXJ5O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgaDEge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogZ2V0TW9iaWxlRm9udCgnODAwJyk7XG4gICAgICAgIG1heC13aWR0aDogMzMlO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aCkge1xuXG4gICAgLmxhbmRpbmdfX2hlYWRlciB7XG4gICAgICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IGdldERlc2t0b3BGb250KCc3MDAnKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbkBtaXhpbiBmbGV4R3JvdXAoJGZsZXgtZGlyZWN0aW9uLCAkanVzdGlmeSwgJGFsaWduKSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXgtZGlyZWN0aW9uO1xuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbn0iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi8vIFJlc2V0IHN0eWxlc1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3742:
/*!***************************************************************!*\
  !*** ./src/app/components/login-auth/login-auth.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuthorizationComponent": () => (/* binding */ LoginAuthorizationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authorization-service/authorization.service */ 9141);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-config-service/user-config.service */ 2338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _page_skeleton_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-skeleton/loading-spinner/loading-spinner.component */ 1411);








function LoginAuthorizationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function LoginAuthorizationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginAuthorizationComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", null, 3)(2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2)(6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div")(10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginAuthorizationComponent_form_6_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.onSignUp(_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Sign-up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginAuthorizationComponent_form_6_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.onLogIn(_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r3.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _r3.invalid);
  }
}
class LoginAuthorizationComponent {
  constructor(authService, router, userConfigService) {
    this.authService = authService;
    this.router = router;
    this.userConfigService = userConfigService;
    this.isLoading = false;
    this.error = '';
  }
  ngOnInit() {
    if (localStorage.getItem('userObject') !== null) {
      this.router.navigate(['/overview']);
    }
  }
  // Should redirect straight to overview if the userObject already exists
  onLogIn(authForm) {
    this.isLoading = true;
    this.authService.login(authForm.value.email, authForm.value.password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      console.log(err);
      this.error = 'An error occurred';
      this.isLoading = false;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error(err));
    })).subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this.userConfigService.userChosenLang.next(res.userConfig.selectedLanguage);
      this.router.navigate(['/overview']);
    });
    authForm.reset();
  }
  onSignUp(authForm) {
    this.isLoading = true;
    this.authService.signup(authForm.value.email, authForm.value.password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(res => {
      console.log(res);
      this.router.navigate(['/overview']);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      console.log(err);
      this.error = 'An error occurred';
      return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
      this.isLoading = false;
    })).subscribe();
    authForm.reset();
  }
}
LoginAuthorizationComponent.ɵfac = function LoginAuthorizationComponent_Factory(t) {
  return new (t || LoginAuthorizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_1__.UserConfigService));
};
LoginAuthorizationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginAuthorizationComponent,
  selectors: [["app-auth"]],
  decls: 7,
  vars: 3,
  consts: [[1, "body-container"], [4, "ngIf"], [1, "form-group"], ["authForm", "ngForm"], ["for", "email"], ["type", "email", "id", "email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "ngModel", "", "name", "password", "required", "", 1, "form-control"], ["type", "submit", 1, "signup-button", 3, "disabled", "click"], ["type", "submit", 1, "login-button", 3, "disabled", "click"]],
  template: function LoginAuthorizationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginAuthorizationComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginAuthorizationComponent_div_2_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Welcome to the next step in Language Learning.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LoginAuthorizationComponent_form_6_Template, 15, 2, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _page_skeleton_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent],
  styles: [".body-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.body-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 50vh;\n}\n.body-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .signup-button[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: #ffffff;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n.body-container[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  background-color: #555555;\n  color: #ffffff;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1hdXRoL2xvZ2luLWF1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUNOO0FBQ0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDTiIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvLyBoZWlnaHQ6IDgwdmg7XG4gIC8vIHdpZHRoOiA4MHZ3O1xuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiA1MHZoO1xuICAgIC5zaWdudXAtYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9911:
/*!***********************************************************!*\
  !*** ./src/app/components/overview/overview.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewComponent": () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var devextreme_core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme/core/config */ 1433);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authorization-service/authorization.service */ 9141);
/* harmony import */ var src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-config-service/user-config.service */ 2338);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-skeleton/nav-bar-general/nav-bar-general.component */ 86);











function OverviewComponent_div_4_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_div_4_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.deleteDocument(item_r2._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx_r3.faTrash);
  }
}
function OverviewComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_div_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const item_r2 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.readDocument(item_r2._id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 13)(4, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OverviewComponent_div_4_button_8_Template, 2, 1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", item_r2.pages.length, " pages \u25CF ", item_r2.language, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isDeleteDocument);
  }
}
(0,devextreme_core_config__WEBPACK_IMPORTED_MODULE_0__["default"])({
  //BMcQ Comment: Configuration of floating action button
  floatingActionButtonConfig: {
    position: {
      my: 'right bottom',
      at: 'right bottom',
      of: '#documents-display-without-filter-options',
      offset: '-16 -16'
    }
  }
});
class OverviewComponent {
  constructor(authService, userConfigService, httpClient, router, cdr) {
    this.authService = authService;
    this.userConfigService = userConfigService;
    this.httpClient = httpClient;
    this.router = router;
    this.cdr = cdr;
    // BMcQ Comment: FontAwesome variables for icons.
    this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTrash;
    this.filteredDocuments = [];
    this.addDocumentVisible = false;
    this.isDeleteDocument = false;
    this.uploadDocData = new FormData();
    this.isSubmitAvailable = false;
    //BMcQ Comment: copying code from file-upload which will be moved here
    this.text = '';
    this.fileName = '';
  }
  // Fetch the user docs array and display them on the template
  ngOnInit() {
    this.user$ = this.authService.user;
    this.userConfig$ = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => this.userConfigService.getUserConfig(user)));
    this.userConfig$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(userConfig => userConfig)).subscribe(userConfigSuperObject => {
      this.selectedLanguage = userConfigSuperObject.userConfig.selectedLanguage;
      console.log('Language: ' + this.selectedLanguage);
    });
    this.getDocuments();
  }
  getDocuments() {
    this.documentsSubscription = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => this.httpClient.get(`http://localhost:3000/documents/getDocuments/${user.id}`)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(response => response.documents), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(documentsFromDB => {
      this.documentsFromDB = documentsFromDB;
      if (this.filterDocuments !== undefined) {
        this.filteredDocuments = this.filterDocuments(documentsFromDB, this.selectedLanguage);
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => new Error(err));
    })).subscribe();
  }
  filterDocuments(documents, language) {
    if (documents && documents.length) {
      return documents.filter(doc => doc.language === language);
    }
  }
  // get ID of document, send to url for deletion
  deleteDocument(documentID) {
    this.documentsSubscription = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => this.httpClient.delete(`http://localhost:3000/documents/deleteDocument/${user.id}/${documentID}`)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(() => {
      this.getDocuments();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      console.log(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => new Error(err));
    })).subscribe();
    // Remove doc from existing array
    for (var i = 0; i < this.filteredDocuments.length; i++) {
      if (this.filteredDocuments[i]._id === documentID) {
        this.filteredDocuments.splice(i, 1);
      }
    }
  }
  ngOnDestroy() {
    if (this.documentsSubscription) {
      this.documentsSubscription.unsubscribe();
    }
  }
  onAddDocument() {
    this.addDocumentVisible = true;
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.uploadDocData = new FormData();
      this.uploadDocData.append('user', JSON.parse(localStorage.getItem('userObject')).id);
      this.uploadDocData.append('document', file, this.fileName);
      this.uploadDocData.append('language', this.selectedLanguage);
      this.isSubmitAvailable = true;
    }
  }
  onFileSubmit() {
    const upload$ = this.httpClient.post('http://127.0.0.1:8000/preprocess', this.uploadDocData);
    this.addDocumentVisible = false;
    upload$.subscribe(response => {
      if (response.successfulUpload) {
        this.filteredDocuments.push(response.successfulUpload);
      }
    });
  }
  onDeleteDocNav() {
    this.isDeleteDocument = true;
  }
  onCancelDeleteDocNav() {
    this.isDeleteDocument = false;
  }
  readDocument(docId) {
    // pass ID to READ tab via query params and route.navigate()
    this.router.navigate(['./read'], {
      queryParams: {
        docId: docId
      }
    });
  }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) {
  return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_2__.UserConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
};
OverviewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: OverviewComponent,
  selectors: [["app-overview"]],
  decls: 22,
  vars: 6,
  consts: [[1, "body"], [1, "RHS"], [1, "items-available"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "filtering-body"], ["type", "file", 1, "file-input", 3, "change"], ["fileUpload", ""], [1, "upload-selecton"], [1, "select-doc-btn", 3, "click"], [1, "submit-doc-btn", 3, "disabled", "click"], [1, "item"], [1, "doc-info", 3, "click"], ["src", "../../../assets/pdf-icon.png"], [1, ""], [1, "item-title"], [1, "item-desc"], ["class", "delete-doc-btn", "type", "button", "id", "delete", 3, "click", 4, "ngIf"], ["type", "button", "id", "delete", 1, "delete-doc-btn", 3, "click"], [3, "icon"]],
  template: function OverviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-nav-bar-general");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, OverviewComponent_div_4_Template, 9, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function OverviewComponent_Template_input_change_8_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Click button to select document");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_Template_button_click_15_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_Template_button_click_19_listener() {
        return ctx.onFileSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredDocuments);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("All documents filtered to ", ctx.selectedLanguage, ", to access other language documents reconfigure settings on User Page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Document being uploaded as ", ctx.selectedLanguage, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.fileName || "Please upload a document");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isSubmitAvailable);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__.NavBarGeneralComponent],
  styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f2ef;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%] {\n  height: 90vh;\n  width: 90vw;\n  display: flex;\n  margin-left: 1vw;\n  margin-top: 0.5vh;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .items-available[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  max-height: 90vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  width: 75vw;\n  margin-right: 1.5vw;\n  border-radius: 0.75vw;\n  padding-left: 2vw;\n  padding-right: 2vw;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .items-available[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin-top: 1vh;\n  height: 8vh;\n  border-radius: 0.75vw;\n  background-color: #f3f2ef;\n  padding-left: 1vw;\n  padding-right: 1vw;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .items-available[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .delete-doc-btn[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 4rem;\n  border: 0;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .items-available[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .doc-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .items-available[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .doc-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-right: 1vw;\n  height: 100%;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .filtering-body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  height: 90vh;\n  width: 10vw;\n  border-radius: 0.75vw;\n}\n\n.submit-doc-btn[_ngcontent-%COMP%] {\n  background: #45b11e;\n  color: white;\n  border-style: outset;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9vdmVydmlldy9vdmVydmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFBSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRU47QUFETTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBR1I7QUFGUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQUlWO0FBRlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFJVjtBQUhVO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBS1o7QUFDSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUNOOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUpGIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmVmO1xuICAuUkhTIHtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xuICAgIG1hcmdpbi10b3A6IDAuNXZoO1xuXG4gICAgLml0ZW1zLWF2YWlsYWJsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgbWF4LWhlaWdodDogOTB2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICB3aWR0aDogNzV2dztcbiAgICAgIG1hcmdpbi1yaWdodDogMS41dnc7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjc1dnc7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJ2dztcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xuICAgICAgICBoZWlnaHQ6IDh2aDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC43NXZ3O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmVmO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDF2dztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXZ3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLmRlbGV0ZS1kb2MtYnRuIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5maWx0ZXJpbmctYm9keSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjc1dnc7XG4gICAgfVxuICB9XG59XG5cbi5zZWxlY3QtZG9jLWJ0biB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5zdWJtaXQtZG9jLWJ0biB7XG4gIGJhY2tncm91bmQ6ICM0NWIxMWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXN0eWxlOiBvdXRzZXQ7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6795:
/*!*********************************************************************!*\
  !*** ./src/app/components/page-skeleton/header/header.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/authorization-service/authorization.service */ 9141);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-config-service/user-config.service */ 2338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






function HeaderComponent_div_6_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 9);
  }
}
function HeaderComponent_div_6_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 10);
  }
}
function HeaderComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderComponent_div_6_img_2_Template, 1, 0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HeaderComponent_div_6_img_4_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx_r0.userConfig$)) == null ? null : tmp_0_0.userConfig.selectedLanguage) == "Irish");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 7, ctx_r0.userConfig$)) == null ? null : tmp_1_0.userConfig.selectedLanguage) == "French");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 9, ctx_r0.userConfig$)) == null ? null : tmp_2_0.userConfig.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 11, ctx_r0.user$)) == null ? null : tmp_4_0.email);
  }
}
class HeaderComponent {
  constructor(authService, router, userConfigService) {
    this.authService = authService;
    this.router = router;
    this.userConfigService = userConfigService;
    this.userDropdownOptions = [{
      name: 'Profile',
      icon: 'alignleft'
    }, {
      name: 'Logout',
      icon: 'aligncenter'
    }];
    this.currentPage = this.router.url;
    router.events.subscribe(val => {
      this.currentPage = this.router.url;
    });
  }
  ngOnInit() {
    this.user$ = this.authService.user;
    this.userConfig$ = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(user => this.userConfigService.getUserConfig(user)));
  }
  ngOnDestroy() {
    this.userConfigService.userChosenLang.unsubscribe();
  }
  dropdownItemSelected(optionSelected) {
    switch (optionSelected) {
      case 'Profile':
        {
          this.router.navigate(['user']);
          break;
        }
      default:
        {
          break;
        }
    }
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_1__.UserConfigService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 7,
  vars: 1,
  consts: [[1, "body"], [1, "logo-brand"], ["src", "../../../assets/IR-Logo.png", "alt", "Infer-Read Logo", 1, "logo-img"], ["class", "RHS-dropdown", 4, "ngIf"], [1, "RHS-dropdown"], [1, "flag-image-container"], ["class", "flag-image", "src", "../../../assets/irish-flag.jpg", "alt", "Irish Flag", 4, "ngIf"], ["class", "flag-image", "src", "../../../assets/french-flag.jpg", "alt", "French Flag", 4, "ngIf"], [1, "user-profile", 3, "routerLink"], ["src", "../../../assets/irish-flag.jpg", "alt", "Irish Flag", 1, "flag-image"], ["src", "../../../assets/french-flag.jpg", "alt", "French Flag", 1, "flag-image"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a")(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Infer-Read");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 13, 13, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentPage != "/");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".body[_ngcontent-%COMP%] {\n  height: 8vh;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  border-bottom: solid black 0.125vh;\n}\n.body[_ngcontent-%COMP%]   .logo-brand[_ngcontent-%COMP%] {\n  height: 8vh;\n  width: 24vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .logo-brand[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  height: 7.75vh;\n  width: 4.25vw;\n  display: block;\n  line-height: 6vh;\n  margin-right: 0.75vw;\n}\n.body[_ngcontent-%COMP%]   .RHS-dropdown[_ngcontent-%COMP%] {\n  margin: 1vh 1vw 1vh 0vw;\n  height: 6vh;\n  width: 16vw;\n  display: flex;\n  flex-direction: row;\n}\n.body[_ngcontent-%COMP%]   .RHS-dropdown[_ngcontent-%COMP%]   .flag-image-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1.25vw;\n}\n.body[_ngcontent-%COMP%]   .RHS-dropdown[_ngcontent-%COMP%]   .flag-image-container[_ngcontent-%COMP%]   .flag-image[_ngcontent-%COMP%] {\n  height: 3vh;\n  width: 2.5vw;\n  border-radius: 0.5rem;\n  display: block;\n  line-height: 6vh;\n  margin-right: 0.25vw;\n}\n.body[_ngcontent-%COMP%]   .RHS-dropdown[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .RHS-dropdown[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #EE8F1D;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLXNrZWxldG9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBRU47QUFDRTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBRU47QUFETTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUdSO0FBQUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVOO0FBRE07RUFDRSxjQUFBO0FBR1IiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIGhlaWdodDogOHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGJsYWNrIDAuMTI1dmg7XG5cbiAgLmxvZ28tYnJhbmQge1xuICAgIGhlaWdodDogOHZoO1xuICAgIHdpZHRoOiAyNHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAubG9nby1pbWcge1xuICAgICAgaGVpZ2h0OiA3Ljc1dmg7XG4gICAgICB3aWR0aDogNC4yNXZ3O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogNnZoO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1dnc7XG4gICAgfVxuICB9XG4gIC5SSFMtZHJvcGRvd24ge1xuICAgIG1hcmdpbjogMXZoIDF2dyAxdmggMHZ3O1xuICAgIGhlaWdodDogNnZoO1xuICAgIHdpZHRoOiAxNnZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAuZmxhZy1pbWFnZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuMjV2dztcbiAgICAgIC5mbGFnLWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAzdmg7XG4gICAgICAgIHdpZHRoOiAyLjV2dztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDZ2aDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1dnc7XG4gICAgICB9XG4gICAgfVxuICAgIC51c2VyLXByb2ZpbGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiNFRThGMUQ7XG4gICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1411:
/*!***************************************************************************************!*\
  !*** ./src/app/components/page-skeleton/loading-spinner/loading-spinner.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingSpinnerComponent": () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoadingSpinnerComponent {
  constructor() {}
  ngOnInit() {}
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) {
  return new (t || LoadingSpinnerComponent)();
};
LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoadingSpinnerComponent,
  selectors: [["app-loading-spinner"]],
  decls: 13,
  vars: 0,
  consts: [[1, "lds-default"]],
  template: function LoadingSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div")(2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div")(11, "div")(12, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".lds-default[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  background: rgb(152, 6, 197);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_lds-default 1.2s linear infinite;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0s;\n  top: 37px;\n  left: 66px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.1s;\n  top: 22px;\n  left: 62px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.2s;\n  top: 11px;\n  left: 52px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.3s;\n  top: 7px;\n  left: 37px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -0.4s;\n  top: 11px;\n  left: 22px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -0.5s;\n  top: 22px;\n  left: 11px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: -0.6s;\n  top: 37px;\n  left: 7px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: -0.7s;\n  top: 52px;\n  left: 11px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\n  animation-delay: -0.8s;\n  top: 62px;\n  left: 22px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10) {\n  animation-delay: -0.9s;\n  top: 66px;\n  left: 37px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11) {\n  animation-delay: -1s;\n  top: 62px;\n  left: 52px;\n}\n\n.lds-default[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12) {\n  animation-delay: -1.1s;\n  top: 52px;\n  left: 62px;\n}\n\n@keyframes _ngcontent-%COMP%_lds-default {\n  0%, 20%, 80%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLXNrZWxldG9uL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFHSjs7QUFERTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFJSjs7QUFGRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFLSjs7QUFIRTtFQUNFLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFNSjs7QUFKRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFPSjs7QUFMRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFRSjs7QUFORTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFTSjs7QUFQRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFVSjs7QUFSRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFXSjs7QUFURTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFZSjs7QUFWRTtFQUNFLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFhSjs7QUFYRTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFjSjs7QUFaRTtFQUNFO0lBQ0UsbUJBQUE7RUFlSjtFQWJFO0lBQ0UscUJBQUE7RUFlSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1kZWZhdWx0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAubGRzLWRlZmF1bHQgZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTUyLCA2LCAxOTcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGxkcy1kZWZhdWx0IDEuMnMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAgIHRvcDogMzdweDtcbiAgICBsZWZ0OiA2NnB4O1xuICB9XG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xuICAgIHRvcDogMjJweDtcbiAgICBsZWZ0OiA2MnB4O1xuICB9XG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xuICAgIHRvcDogMTFweDtcbiAgICBsZWZ0OiA1MnB4O1xuICB9XG4gIC5sZHMtZGVmYXVsdCBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuICAgIHRvcDogN3B4O1xuICAgIGxlZnQ6IDM3cHg7XG4gIH1cbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XG4gICAgdG9wOiAxMXB4O1xuICAgIGxlZnQ6IDIycHg7XG4gIH1cbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoNikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgdG9wOiAyMnB4O1xuICAgIGxlZnQ6IDExcHg7XG4gIH1cbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoNykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gICAgdG9wOiAzN3B4O1xuICAgIGxlZnQ6IDdweDtcbiAgfVxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbiAgICB0b3A6IDUycHg7XG4gICAgbGVmdDogMTFweDtcbiAgfVxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCg5KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbiAgICB0b3A6IDYycHg7XG4gICAgbGVmdDogMjJweDtcbiAgfVxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxMCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gICAgdG9wOiA2NnB4O1xuICAgIGxlZnQ6IDM3cHg7XG4gIH1cbiAgLmxkcy1kZWZhdWx0IGRpdjpudGgtY2hpbGQoMTEpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcbiAgICB0b3A6IDYycHg7XG4gICAgbGVmdDogNTJweDtcbiAgfVxuICAubGRzLWRlZmF1bHQgZGl2Om50aC1jaGlsZCgxMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG4gICAgdG9wOiA1MnB4O1xuICAgIGxlZnQ6IDYycHg7XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtZGVmYXVsdCB7XG4gICAgMCUsIDIwJSwgODAlLCAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgfVxuICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 86:
/*!***************************************************************************************!*\
  !*** ./src/app/components/page-skeleton/nav-bar-general/nav-bar-general.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarGeneralComponent": () => (/* binding */ NavBarGeneralComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/authorization-service/authorization.service */ 9141);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);





class NavBarGeneralComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.faSignOut = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faSignOut;
    this.faBook = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faBook;
    this.faEraser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEraser;
    this.faFolderOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faFolderOpen;
  }
  ngOnInit() {}
  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
NavBarGeneralComponent.ɵfac = function NavBarGeneralComponent_Factory(t) {
  return new (t || NavBarGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
NavBarGeneralComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: NavBarGeneralComponent,
  selectors: [["app-nav-bar-general"]],
  decls: 14,
  vars: 5,
  consts: [[1, "body"], [1, "list-buttons"], ["id", "overview-btn", "routerLinkActive", "active-link", 1, "button", 3, "routerLink"], ["size", "5x", 3, "icon"], ["id", "review-btn", "routerLinkActive", "active-link", 1, "button", 3, "routerLink"], ["id", "review-btn", 1, "button", 3, "click"]],
  template: function NavBarGeneralComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavBarGeneralComponent_Template_div_click_10_listener() {
        return ctx.onLogout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faBook);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/review");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faEraser);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faSignOut);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: ["@import url(https://fonts.googleapis.com/css?family=Crimson+Text:400,700,900,400italic,700italic,900italic|Playfair+Display:400,700,900,400italic,700italic,900italic|Rock+Salt:400);.body[_ngcontent-%COMP%] {\n  height: 81.75vh;\n  width: 10vw;\n  margin-top: 5vh;\n  margin-bottom: 5vh;\n  margin-left: 2vw;\n  font-family: \"Crimson Text\", sans-serif;\n}\n.body[_ngcontent-%COMP%]   .list-buttons[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  height: 81.75vh;\n  width: 10vw;\n  border-radius: 0.75vw;\n  justify-content: space-around;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .list-buttons[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  color: #ee8f1d;\n}\n.body[_ngcontent-%COMP%]   .list-buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 15vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.body[_ngcontent-%COMP%]   .list-buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.body[_ngcontent-%COMP%]   .list-buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-left: 6vw;\n}\n.body[_ngcontent-%COMP%]   .list-buttons[_ngcontent-%COMP%]   .border-line[_ngcontent-%COMP%] {\n  width: 75%;\n  border: 1px black solid;\n}\n\n.active-link[_ngcontent-%COMP%] {\n  color: #f5aa4e; \n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLXNrZWxldG9uL25hdi1iYXItZ2VuZXJhbC9uYXYtYmFyLWdlbmVyYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7QUFBRjtBQUNFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0UsY0FBQTtBQUVOO0FBQUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVOO0FBQU07RUFDRSxpQkFBQTtBQUVSO0FBQU07RUFDRSxnQkFBQTtBQUVSO0FBRUk7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7QUFBTjs7QUFLQTtFQUNFLGNBQUEsRUFBQSxnQkFBQTtBQUZGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNyaW1zb24rVGV4dDo0MDAsNzAwLDkwMCw0MDBpdGFsaWMsNzAwaXRhbGljLDkwMGl0YWxpY3xQbGF5ZmFpcitEaXNwbGF5OjQwMCw3MDAsOTAwLDQwMGl0YWxpYyw3MDBpdGFsaWMsOTAwaXRhbGljfFJvY2srU2FsdDo0MDApO1xuXG4uYm9keSB7XG4gIGhlaWdodDogODEuNzV2aDtcbiAgd2lkdGg6IDEwdnc7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuICBmb250LWZhbWlseTogXCJDcmltc29uIFRleHRcIiwgc2Fucy1zZXJpZjtcbiAgLmxpc3QtYnV0dG9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxdmg7XG4gICAgaGVpZ2h0OiA4MS43NXZoO1xuICAgIHdpZHRoOiAxMHZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNzV2dztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIDpob3ZlciB7XG4gICAgICBjb2xvcjogI2VlOGYxZDtcbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTV2dzsgLy9CTWNRIENvbW1lbnQ6IFRoaXMgaXMgbW9zdCBsaWtlbHkgcHJvYmxlbWF0aWNcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIH1cbiAgICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2dnc7XG4gICAgICAgIC8vIGZpbGw6ICNFRThGMUQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5ib3JkZXItbGluZSB7XG4gICAgICB3aWR0aDogNzUlO1xuICAgICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XG4gICAgfVxuICB9XG59XG5cbi5hY3RpdmUtbGluayB7XG4gIGNvbG9yOiAjZjVhYTRlOyAvKiB3aGl0ZSBjb2xvciAqL1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 555:
/*!*******************************************************************!*\
  !*** ./src/app/components/reading-view/reading-view.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadingViewComponent": () => (/* binding */ ReadingViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authorization-service/authorization.service */ 9141);
/* harmony import */ var _services_bank_service_bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/bank-service/bank.service */ 6940);
/* harmony import */ var src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-config-service/user-config.service */ 2338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-skeleton/nav-bar-general/nav-bar-general.component */ 86);











function ReadingViewComponent_div_17_h3_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.disambiguation[feature_r5.value], " ");
  }
}
function ReadingViewComponent_div_17_h2_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Contextually viable:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReadingViewComponent_div_17_h3_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const word_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](word_r6);
  }
}
function ReadingViewComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ReadingViewComponent_div_17_h3_7_Template, 2, 1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ReadingViewComponent_div_17_h2_9_Template, 2, 0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ReadingViewComponent_div_17_h3_10_Template, 2, 1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selectedWord);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]("Root: " + ctx_r0.wordHelp.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.wordHelp.partOfSpeech);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, ctx_r0.wordHelp.morphology));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.wordHelp.maskedLMPredictions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.wordHelp.maskedLMPredictions);
  }
}
function ReadingViewComponent_div_18_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Contextually viable:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReadingViewComponent_div_18_h3_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const word_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](word_r9);
  }
}
function ReadingViewComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ReadingViewComponent_div_18_h3_3_Template, 2, 0, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ReadingViewComponent_div_18_h3_4_Template, 2, 1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.selectedWord);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.wordHelp.maskedLMPredictions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.wordHelp.maskedLMPredictions);
  }
}
// TODO: Remove timer logic at some point - when happy with request-response speed
class ReadingViewComponent {
  constructor(route, http, authService, bankService, cdRef, userConfigService) {
    this.route = route;
    this.http = http;
    this.authService = authService;
    this.bankService = bankService;
    this.cdRef = cdRef;
    this.userConfigService = userConfigService;
    this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronRight;
    this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faChevronLeft;
    this.disambiguation = this.bankService.disambiguation;
    this.FR_MASK = ' <mask> ';
  }
  ngOnInit() {
    this.user$ = this.authService.user;
    this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => {
      return this.bankService.getBank(user);
    })).subscribe();
    this.paramSubscription = this.route.queryParams.subscribe(params => {
      this.documentId = params['docId'];
      if (localStorage.getItem(this.documentId) === null) {
        this.getCurrentPage();
      } else {
        this.text = localStorage.getItem(this.documentId);
        this.pageIndex = parseInt(localStorage.getItem('${this.documentId}/pageIndex'));
      }
    });
    this.userConfig$ = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => this.userConfigService.getUserConfig(user)));
    this.userConfig$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(userConfig => userConfig)).subscribe(userConfigSuperObject => {
      this.selectedLanguage = userConfigSuperObject.userConfig.selectedLanguage;
      console.log(this.selectedLanguage);
    });
  }
  // Patch HTTP on pageIndex
  // pageIndex inside of document
  // setup endpoint in API
  canDeactivate() {
    if (confirm('Are you sure you want to finish reading?')) {
      return this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => {
        this.updatePageIndex(user);
        return this.bankService.updateBank(user);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
        console.log('Response:', response);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => true), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(false)));
    } else {
      return false;
    }
  }
  // fetch page function, pagination on click? First page should be loaded on init
  // fetch via fastAPI backend
  // retrieve pageIndex, set local pageIndex var, get the respective page
  getCurrentPage() {
    // Use docID and pageIndex in DB to retrieve the current page
    this.currentPageSubscription = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => this.http.get(`http://127.0.0.1:8000/getCurrentPage/${user.id}/${this.documentId}`)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
      this.pageIndex = response.pageIndex;
      this.text = response.page;
      this.setLocalStorage();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => new Error(err));
    })).subscribe();
  }
  // get the next page in the array
  // set this.pageIndex to this.pageIndex++ when done
  getPreviousPage() {
    this.nextPageSubscription = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => this.http.get(`http://127.0.0.1:8000/getPreviousPage/${user.id}/${this.documentId}/${this.pageIndex}`)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
      this.pageIndex--;
      this.text = response.page;
      this.setLocalStorage();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      console.log(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => new Error(err));
    })).subscribe();
  }
  getNextPage() {
    this.nextPageSubscription = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => this.http.get(`http://127.0.0.1:8000/getNextPage/${user.id}/${this.documentId}/${this.pageIndex}`)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
      this.pageIndex++;
      this.bankService.addToKnown(this.text);
      this.text = response.page;
      this.setLocalStorage();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      console.log(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => new Error(err));
    })).subscribe();
  }
  updatePageIndex(user) {
    this.http.patch(`http://127.0.0.1:8000/updatePageIndex/${user.id}/${this.documentId}`, {
      pageIndex: this.pageIndex
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
      console.log(response);
    })).subscribe();
  }
  setLocalStorage() {
    localStorage.setItem(this.documentId, this.text);
    localStorage.setItem('${this.documentId}/pageIndex', this.pageIndex.toString());
  }
  ngOnDestroy() {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
    if (this.currentPageSubscription) {
      this.currentPageSubscription.unsubscribe();
    }
    if (this.nextPageSubscription) {
      this.nextPageSubscription.unsubscribe();
    }
    if (this.wordHelpSubscription) {
      this.wordHelpSubscription.unsubscribe();
    }
  }
  grabSurroundingSentence(selection) {
    const anchorText = selection.anchorNode.textContent;
    const focusText = selection.focusNode.textContent;
    const textStartIndex = Math.min(selection.anchorOffset, selection.focusOffset);
    const textEndIndex = Math.max(selection.anchorOffset, selection.focusOffset);
    const textBefore = anchorText.slice(0, textStartIndex);
    const textAfter = focusText.slice(textEndIndex);
    const punctuationRegex = /[.!?]/;
    const punctuationBeforeIndex = textBefore.split('').reverse().join('').search(punctuationRegex);
    const sentenceStart = punctuationBeforeIndex !== -1 ? textBefore.slice(-punctuationBeforeIndex) : textBefore;
    const punctuationAfterIndex = textAfter.search(punctuationRegex);
    const sentenceEnd = punctuationAfterIndex !== -1 ? textAfter.slice(0, punctuationAfterIndex) : textAfter;
    // Add MASK token to context sentence here, in case of sentences where word appears twice
    let sentence;
    let maskedSentence;
    if (this.selectedLanguage === 'French') {
      sentence = sentenceStart + this.selectedWord + sentenceEnd;
      maskedSentence = sentenceStart + this.FR_MASK + sentenceEnd;
    } else {
      sentence = sentenceStart + this.selectedWord + sentenceEnd;
    }
    return [sentence, maskedSentence];
  }
  highlight(event) {
    var selection = window.getSelection();
    this.selectedWord = selection.toString();
    // if (this.selectedWord.indexOf('-') !== -1) {
    //   var words = this.selectedWord.split('-');
    //   var fullString = words.join('-').trim();
    //   var range = document.createRange();
    //   range.selectNodeContents(event.target);
    //   var startIndex = event.target.textContent.indexOf(fullString);
    //   var endIndex = startIndex + fullString.length;
    //   range.setStart(event.target.firstChild, startIndex);
    //   range.setEnd(event.target.firstChild, endIndex);
    //   window.getSelection().removeAllRanges();
    //   window.getSelection().addRange(range);
    // }
    const [sentence, maskedSentence] = this.grabSurroundingSentence(selection);
    // Send to NLP backend and process
    // display information inside helper window
    if (this.bankService.known.has(this.selectedWord)) {
      this.bankService.known.delete(this.selectedWord);
    }
    let processWordLangURL = 'http://127.0.0.1:8000/processWord' + this.selectedLanguage;
    this.wordHelpSubscription = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(user => this.http.post(processWordLangURL, {
      word: this.selectedWord,
      context: sentence,
      maskedContext: maskedSentence,
      userId: user.id
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(response => {
      console.log(response);
      this.wordHelp = response;
      for (let i = 0; i < this.bankService.learning.length; i++) {
        if (this.bankService.learning[i].word === this.selectedWord) {
          return;
        }
      }
      this.bankService.learning.push({
        word: this.selectedWord,
        partOfSpeech: response.partOfSpeech,
        morphology: response.morphology,
        root: response.root,
        lastReviewed: undefined,
        interval: undefined
      });
      console.log(this.bankService.learning);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)(() => new Error(err));
    })).subscribe();
    // else if (user.userConfig.selectedLanguage == 'French') {
    //   return this.http.post('http://127.0.0.1:8000/processWordFrench', {
    //     word: this.selectedWord,
    //     context: sentence,
    //     userId: user.id,
    //   });
  }
}

ReadingViewComponent.ɵfac = function ReadingViewComponent_Factory(t) {
  return new (t || ReadingViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_bank_service_bank_service__WEBPACK_IMPORTED_MODULE_1__.BankService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_2__.UserConfigService));
};
ReadingViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ReadingViewComponent,
  selectors: [["app-reading-view"]],
  decls: 19,
  vars: 7,
  consts: [[1, "body"], [1, "RHS"], [1, "reading-and-nav"], [1, "reading-body"], [3, "textContent", "dblclick"], [1, "reading-nav"], [1, "nav-btn", 3, "disabled", "click"], ["size", "3x", 3, "icon"], [1, "nav-btn", 3, "click"], ["class", "side-help-info", 4, "ngIf"], [1, "side-help-info"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
  template: function ReadingViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-nav-bar-general");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function ReadingViewComponent_Template_p_dblclick_5_listener($event) {
        return ctx.highlight($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReadingViewComponent_Template_button_click_7_listener() {
        return ctx.getPreviousPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "fa-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReadingViewComponent_Template_button_click_13_listener() {
        return ctx.getNextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "fa-icon", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ReadingViewComponent_div_17_Template, 11, 8, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ReadingViewComponent_div_18_Template, 5, 3, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("textContent", ctx.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.pageIndex == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faChevronLeft);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pageIndex + 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", ctx.faChevronRight);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedLanguage == "French" && ctx.wordHelp);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedLanguage == "Irish");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent, _page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__.NavBarGeneralComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.KeyValuePipe],
  styles: ["@import url(https://fonts.googleapis.com/css?family=Crimson+Text:400,700,900,400italic,700italic,900italic|Playfair+Display:400,700,900,400italic,700italic,900italic|Rock+Salt:400);.body[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f2ef;\n  font-family: \"Crimson Text\", sans-serif;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%] {\n  height: 90vh;\n  width: 90vw;\n  display: flex;\n  margin-left: 1vw;\n  margin-top: 0.5vh;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .reading-and-nav[_ngcontent-%COMP%]   .reading-body[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 2px solid #887974;\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);\n  line-height: 1.4;\n  margin: 0 auto;\n  min-height: 80vh;\n  max-height: 80vh;\n  width: 75vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  margin-right: 1.5vw;\n  border-radius: 0.75vw;\n  padding-left: 2vw;\n  padding-right: 2vw;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .reading-and-nav[_ngcontent-%COMP%]   .reading-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .reading-and-nav[_ngcontent-%COMP%]   .reading-nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  height: 10vh;\n  width: 75vw;\n  align-items: center;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .reading-and-nav[_ngcontent-%COMP%]   .reading-nav[_ngcontent-%COMP%]   .nav-btn[_ngcontent-%COMP%] {\n  height: 8vh;\n  color: #000000;\n  padding: 10px 20px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .side-help-info[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  height: 90vh;\n  width: 10vw;\n  border-radius: 0.75vw;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #555;\n  border-radius: 5px;\n}\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #000;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWFkaW5nLXZpZXcvcmVhZGluZy12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QUFBRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBRU07RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFSO0FBQ1E7RUFDRSxlQUFBO0FBQ1Y7QUFFTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUNRO0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBVjtBQUlJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBRk47O0FBT0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFKRjs7QUFPQSxXQUFBO0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0Esb0JBQUE7QUFDQTtFQUNFLHNCQUFBO0FBSkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q3JpbXNvbitUZXh0OjQwMCw3MDAsOTAwLDQwMGl0YWxpYyw3MDBpdGFsaWMsOTAwaXRhbGljfFBsYXlmYWlyK0Rpc3BsYXk6NDAwLDcwMCw5MDAsNDAwaXRhbGljLDcwMGl0YWxpYyw5MDBpdGFsaWN8Um9jaytTYWx0OjQwMCk7XG5cbi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJlZjtcbiAgZm9udC1mYW1pbHk6IFwiQ3JpbXNvbiBUZXh0XCIsIHNhbnMtc2VyaWY7XG4gIC5SSFMge1xuICAgIGhlaWdodDogOTB2aDtcbiAgICB3aWR0aDogOTB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XG4gICAgbWFyZ2luLXRvcDogMC41dmg7XG5cbiAgICAucmVhZGluZy1hbmQtbmF2IHtcbiAgICAgIC5yZWFkaW5nLWJvZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjODg3OTc0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICAgICAgICBtYXgtaGVpZ2h0OiA4MHZoO1xuICAgICAgICB3aWR0aDogNzV2dztcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXZ3O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjc1dnc7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnZ3O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAydnc7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnJlYWRpbmctbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIHdpZHRoOiA3NXZ3O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAubmF2LWJ0biB7XG4gICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgaGVpZ2h0OiA4dmg7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zaWRlLWhlbHAtaW5mbyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjc1dnc7XG4gICAgfVxuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8158:
/*!*****************************************************************!*\
  !*** ./src/app/components/review-page/review-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewPageComponent": () => (/* binding */ ReviewPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_bank_service_bank_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/bank-service/bank.service */ 6940);
/* harmony import */ var src_app_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authorization-service/authorization.service */ 9141);
/* harmony import */ var src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-config-service/user-config.service */ 2338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-skeleton/nav-bar-general/nav-bar-general.component */ 86);







const _c0 = ["cardDiv"];
function ReviewPageComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReviewPageComponent_ng_container_7_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.startRevision());
    })("keyup.space", function ReviewPageComponent_ng_container_7_div_1_Template_button_keyup_space_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.startRevision());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Start Revision ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("New: ", ctx_r3.new.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("In Progress: ", ctx_r3.inProgress.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Due: ", ctx_r3.due.length, "");
  }
}
function ReviewPageComponent_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No cards due for today. Keep learning!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReviewPageComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReviewPageComponent_ng_container_7_div_1_Template, 9, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ReviewPageComponent_ng_container_7_div_2_Template, 2, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.total > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.total === 0);
  }
}
function ReviewPageComponent_ng_template_8_div_0_div_9_div_3_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r12.disambiguation[feature_r13.value], " ");
  }
}
function ReviewPageComponent_ng_template_8_div_0_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReviewPageComponent_ng_template_8_div_0_div_9_div_3_h3_1_Template, 2, 1, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r11.currentCard.morphology));
  }
}
function ReviewPageComponent_ng_template_8_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ReviewPageComponent_ng_template_8_div_0_div_9_div_3_Template, 3, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReviewPageComponent_ng_template_8_div_0_div_9_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.againHandler(ctx_r14.currentCard));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Again");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReviewPageComponent_ng_template_8_div_0_div_9_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.goodHandler(ctx_r16.currentCard));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Good");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReviewPageComponent_ng_template_8_div_0_div_9_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.easyHandler(ctx_r17.currentCard));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Easy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10.currentCard.partOfSpeech);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.currentCard.morphology);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Root: ", ctx_r10.currentCard.root, "");
  }
}
function ReviewPageComponent_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ReviewPageComponent_ng_template_8_div_0_div_9_Template, 13, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("New: ", ctx_r8.new.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("In Progress: ", ctx_r8.inProgress.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Due: ", ctx_r8.due.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.currentCard.word);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.displayCard);
  }
}
function ReviewPageComponent_ng_template_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "All cards for today are done.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ReviewPageComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ReviewPageComponent_ng_template_8_div_0_Template, 10, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReviewPageComponent_ng_template_8_div_1_Template, 3, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Press Space to Reveal Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.total > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.total === 0);
  }
}
class ReviewPageComponent {
  constructor(bankService, authService, userConfigService) {
    this.bankService = bankService;
    this.authService = authService;
    this.userConfigService = userConfigService;
    this.new = [];
    this.inProgress = [];
    this.due = [];
    this.start = true;
    this.displayCard = false;
    this.showElement = false;
    this.disambiguation = this.bankService.disambiguation;
    // ms values for intervals, 1 day and 10 minutes respectively
    this.dayInterval = 86400000;
    this.goodInterval = 600000;
    this.easyInterval = this.dayInterval * 3;
    this.monthInterval = 2629800000;
    this.done = [];
  }
  ngOnInit() {
    // Initialise new and due, set inProgress during
    this.user$ = this.authService.user;
    this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(user => {
      return this.bankService.getBank(user).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(res => {
        this.initCards();
        this.total = this.new.length + this.inProgress.length + this.due.length;
      }));
    })).subscribe();
    this.userConfig$ = this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(user => this.userConfigService.getUserConfig(user)));
  }
  ngAfterViewInit() {
    if (this.cardDiv) {
      this.cardDiv.nativeElement.focus();
    }
  }
  handleKeyboardEvent(event) {
    this.showElement = true;
    this.displayCard = true;
  }
  initCards() {
    this.bankService.learning.forEach(learningWord => {
      console.log(learningWord.lastReviewed);
      if (learningWord.lastReviewed === undefined) {
        this.new.push(learningWord);
      } else if (learningWord.lastReviewed && learningWord.interval < this.dayInterval) {
        this.inProgress.push(learningWord);
      } else if (new Date(learningWord.lastReviewed).getTime() + learningWord.interval < Date.now()) {
        this.due.push(learningWord);
      }
    });
  }
  startRevision() {
    this.start = false;
    this.displayCard = false;
    this.getCard();
  }
  getCard() {
    if (this.due.length > 0 && this.inProgress.length > 0) {
      this.currentCard = this.inProgress.pop();
      console.log('Popped from in prog');
    } else if (this.due.length > 0 && this.inProgress.length === 0) {
      this.currentCard = this.due.pop();
      console.log('Popped from due');
    } else if (this.new.length > 0 && this.inProgress.length < 5) {
      this.currentCard = this.new.pop();
      console.log('Popped from new');
    } else if (this.inProgress.length > 5) {
      this.currentCard = this.inProgress.pop();
      console.log('Popped from in prog');
    } else {
      this.currentCard = this.inProgress.pop();
      console.log('Popped from in prog');
    }
  }
  // buttons
  // again -> show card again in 1 minute -> push to inProgress, reset interval
  // good -> show card again in 10 mins first time round, then 1 day, then a multiplier of **2?
  // easy -> show card again in 4 days, then multiplier of **3?
  againHandler(currentCard) {
    if (currentCard.interval > this.goodInterval) {
      currentCard.interval = this.goodInterval;
    }
    currentCard.lastReviewed = new Date();
    this.inProgress.push(currentCard);
    if (this.total !== 0) {
      this.getCard();
    }
    this.displayCard = false;
  }
  goodHandler(currentCard) {
    if (currentCard.interval >= this.dayInterval) {
      currentCard.interval *= 2;
      currentCard.lastReviewed = new Date();
      this.done.push(currentCard);
      this.total--;
    } else if (currentCard.interval === this.goodInterval) {
      currentCard.interval = this.dayInterval;
      currentCard.lastReviewed = new Date();
      this.done.push(currentCard);
      this.total--;
    } else if (currentCard.interval === undefined) {
      currentCard.interval = this.goodInterval;
      currentCard.lastReviewed = new Date();
      this.inProgress.push(currentCard);
    }
    if (this.total !== 0) {
      this.getCard();
    }
    this.displayCard = false;
  }
  easyHandler(currentCard) {
    if (currentCard.interval === undefined || currentCard.interval === this.goodInterval) {
      currentCard.interval = this.easyInterval;
    } else {
      currentCard.interval *= 3;
    }
    currentCard.lastReviewed = new Date();
    if (this.total !== 0) {
      this.getCard();
    }
    this.displayCard = false;
  }
  // do this on exit
  // for words inside inProgress and done
  updateLearningBank() {
    console.log(this.done);
    this.done.forEach(finishedWord => {
      console.log(finishedWord.word);
      let index = this.bankService.learning.findIndex(learningWord => {
        learningWord.word === finishedWord.word;
      });
      if (finishedWord.interval > this.monthInterval) {
        this.bankService.known.add(finishedWord.word);
        this.bankService.learning.splice(index, 1);
      } else {
        this.bankService.learning[index] = finishedWord;
      }
    });
    if (this.inProgress.length > 0) {
      this.inProgress.forEach(inProgressWord => {
        let index = this.bankService.learning.findIndex(learningWord => {
          learningWord.word === inProgressWord.word;
        });
        this.bankService.learning[index] = inProgressWord;
      });
    }
  }
  canDeactivate() {
    this.updateLearningBank();
    console.log('Updated bank', this.bankService.learning);
    this.user$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.switchMap)(user => {
      return this.bankService.updateBank(user);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(() => {
      return true;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(false))).subscribe();
    return true;
  }
}
ReviewPageComponent.ɵfac = function ReviewPageComponent_Factory(t) {
  return new (t || ReviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_bank_service_bank_service__WEBPACK_IMPORTED_MODULE_0__.BankService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_1__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_2__.UserConfigService));
};
ReviewPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ReviewPageComponent,
  selectors: [["app-review-page"]],
  viewQuery: function ReviewPageComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.cardDiv = _t.first);
    }
  },
  hostBindings: function ReviewPageComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup.space", function ReviewPageComponent_keyup_space_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    }
  },
  decls: 10,
  vars: 5,
  consts: [[1, "body"], [1, "RHS"], [1, "X"], [4, "ngIf", "ngIfElse"], ["X", ""], [4, "ngIf"], ["tabindex", "0", 3, "click", "keyup.space"], [3, "click"], [4, "ngFor", "ngForOf"]],
  template: function ReviewPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-nav-bar-general");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ReviewPageComponent_ng_container_7_Template, 3, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ReviewPageComponent_ng_template_8_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Personalized Training for ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, ctx.userConfig$)) == null ? null : tmp_0_0.userConfig.selectedLanguage, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.start)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__.NavBarGeneralComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.KeyValuePipe],
  styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f2ef;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%] {\n  height: 90vh;\n  width: 98vw;\n  display: flex;\n  flex-direction: column;\n  margin-left: 1vw;\n  margin-top: 0.5vh;\n  margin-right: 1vw;\n  border-radius: 0.75vw;\n  background-color: #ffffff;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .X[_ngcontent-%COMP%] {\n  height: 90vh;\n  background-color: #f3f2ef;\n  border-left: #000000 0.125vw solid;\n  border-right: #000000 0.125vw solid;\n  margin-left: 22.5vw;\n  margin-right: 22.5vw;\n  padding-left: 2.5vw;\n  padding-right: 2.5vw;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #555555;\n  color: #ffffff;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXZpZXctcGFnZS9yZXZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFFSjtBQURJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBR047O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJlZjtcbiAgLlJIUyB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiA5OHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xuICAgIG1hcmdpbi10b3A6IDAuNXZoO1xuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNzV2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIC5YIHtcbiAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YyZWY7XG4gICAgICBib3JkZXItbGVmdDogIzAwMDAwMCAwLjEyNXZ3IHNvbGlkO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAjMDAwMDAwIDAuMTI1dncgc29saWQ7XG4gICAgICBtYXJnaW4tbGVmdDogMjIuNXZ3O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMi41dnc7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIuNXZ3O1xuICAgICAgcGFkZGluZy1yaWdodDogMi41dnc7XG4gICAgfVxuICB9XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU1NTU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6720:
/*!*************************************************************!*\
  !*** ./src/app/components/user-page/user-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageComponent": () => (/* binding */ UserPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/authorization-service/authorization.service */ 9141);
/* harmony import */ var _services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-config-service/user-config.service */ 2338);
/* harmony import */ var src_app_services_bank_service_bank_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/bank-service/bank.service */ 6940);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-skeleton/nav-bar-general/nav-bar-general.component */ 86);







function UserPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.user.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Username: ", ctx_r0.user.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, ctx_r0.user.userConfig), "");
  }
}
function UserPageComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "User Data Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class UserPageComponent {
  constructor(authService, userConfigService, bankService) {
    this.authService = authService;
    this.userConfigService = userConfigService;
    this.bankService = bankService;
  }
  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe({
      next: user => {
        this.user = user;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    if (this.clearBankSubscription) this.clearBankSubscription.unsubscribe();
    if (this.getBankSubscription) this.getBankSubscription.unsubscribe();
  }
  clearBank(user) {
    this.bankService.clearBank(user).subscribe();
    this.bankService.getBank(user).subscribe();
  }
  updateUserConfig(newLanguage) {
    this.userConfigService.updateUserConfig(this.user, {
      selectedLanguage: newLanguage
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
      console.log(res);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.log(err);
      return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {})).subscribe();
  }
}
UserPageComponent.ɵfac = function UserPageComponent_Factory(t) {
  return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_config_service_user_config_service__WEBPACK_IMPORTED_MODULE_1__.UserConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_bank_service_bank_service__WEBPACK_IMPORTED_MODULE_2__.BankService));
};
UserPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UserPageComponent,
  selectors: [["app-user-page"]],
  decls: 16,
  vars: 2,
  consts: [[1, "body"], [1, "RHS"], ["class", "user-page-header", 4, "ngIf", "ngIfElse"], ["userDataError", ""], [1, "user-page-expanded"], [3, "click"], [1, "user-page-header"]],
  template: function UserPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-nav-bar-general");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, UserPageComponent_div_3_Template, 8, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, UserPageComponent_ng_template_4_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserPageComponent_Template_button_click_7_listener() {
        return ctx.clearBank(ctx.user);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Clear Word Bank");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserPageComponent_Template_button_click_10_listener() {
        return ctx.updateUserConfig("Irish");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Set config to Irish");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserPageComponent_Template_button_click_13_listener() {
        return ctx.updateUserConfig("French");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Set config to French");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _page_skeleton_nav_bar_general_nav_bar_general_component__WEBPACK_IMPORTED_MODULE_3__.NavBarGeneralComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.JsonPipe],
  styles: [".body[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #f3f2ef;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%] {\n  height: 90vh;\n  width: 90vw;\n  display: flex;\n  flex-direction: column;\n  margin-left: 1vw;\n  margin-top: 0.5vh;\n  margin-right: 1vw;\n  border-radius: 0.75vw;\n  background-color: #ffffff;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .user-page-header[_ngcontent-%COMP%] {\n  height: 30vh;\n  border-bottom: 1px solid #000000;\n}\n.body[_ngcontent-%COMP%]   .RHS[_ngcontent-%COMP%]   .user-page-expanded[_ngcontent-%COMP%] {\n  height: 60vh;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #555555;\n  color: #ffffff;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin-left: 2vw;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFBRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUVKO0FBREk7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7QUFHTjtBQURJO0VBQ0UsWUFBQTtBQUdOOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjJlZjtcbiAgLlJIUyB7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xuICAgIG1hcmdpbi10b3A6IDAuNXZoO1xuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNzV2dztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIC51c2VyLXBhZ2UtaGVhZGVyIHtcbiAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIH1cbiAgICAudXNlci1wYWdlLWV4cGFuZGVkIHtcbiAgICAgIGhlaWdodDogNjB2aDtcbiAgICB9XG4gIH1cbn1cblxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1NTU1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4872:
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
  constructor(email, id, userConfig, bank, _token, _tokenExpires) {
    this.email = email;
    this.id = id;
    this.userConfig = userConfig;
    this.bank = bank;
    this._token = _token;
    this._tokenExpires = _tokenExpires;
  }
  get token() {
    if (!this._tokenExpires || new Date() > this._tokenExpires) return null;
    return this._token;
  }
}

/***/ }),

/***/ 6256:
/*!***************************************************!*\
  !*** ./src/app/services/auth-guard/auth.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authorization-service/authorization.service */ 9141);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);




class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    return this.authService.user.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      return !!user ? true : this.router.createUrlTree(['auth']);
    }));
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4055:
/*!*******************************************************************************!*\
  !*** ./src/app/services/auth-interceptor-service/auth-interceptor.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authorization-service/authorization.service */ 9141);




class AuthInterceptorService {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    if (req.url.match("http://127.0.0.1:8000/.+")) {
      return next.handle(req);
    } else {
      return this.authService.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.exhaustMap)(user => {
        if (!user || !user.token) return next.handle(req);
        const modifiedRequest = req.clone({
          params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().set('auth', user.token)
        });
        return next.handle(modifiedRequest);
      }));
    }
  }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) {
  return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService));
};
AuthInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthInterceptorService,
  factory: AuthInterceptorService.ɵfac
});

/***/ }),

/***/ 9141:
/*!*************************************************************************!*\
  !*** ./src/app/services/authorization-service/authorization.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationService": () => (/* binding */ AuthorizationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/user.model */ 4872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _bank_service_bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank-service/bank.service */ 6940);






class AuthorizationService {
  authHandler(response) {
    const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.User(response.email, response.id, response.userConfig, response.bank, response.token, response.expiresIn);
    this.user.next(user);
    // Have to cast to new Date() again due to problem with res deserialisation in getTime() method
    this.tokenExpirationHandler(new Date(response.expiresIn).getTime());
    localStorage.setItem('userObject', JSON.stringify(user));
    this.bankService.known = new Set(response.bank.known);
    this.bankService.learning = response.bank.learning;
  }
  signup(email, password) {
    return this.http.post('http://localhost:3000/auth/signup', {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
      this.authHandler(res);
    }));
  }
  login(email, password) {
    return this.http.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(res => {
      this.authHandler(res);
    }));
  }
  logout() {
    this.user.next(null);
    localStorage.removeItem('userObject');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
  autoLog() {
    const userData = localStorage.getItem('userObject');
    if (userData) {
      const userObject = JSON.parse(userData);
      const cachedUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.User(userObject.email, userObject.id, userObject.userConfig, userObject.bank, userObject._token, new Date(userObject._tokenExpires));
      if (cachedUser.token) {
        this.user.next(cachedUser);
        // This accounts for the remaining time left on the token
        this.tokenExpirationHandler(new Date(userObject._tokenExpires).getTime() - new Date().getTime());
      }
    }
  }
  // Want to check for time left on json web token every time a new subject event is emitted
  tokenExpirationHandler(expirationDuration) {
    // BMcQ Comment: Bug?, expirationDuration is always 0
    // this.tokenExpirationTimer = setTimeout(() => {
    //   this.logout();
    // }, expirationDuration);
    // console.log(expirationDuration);
  }
  getUserId() {
    return JSON.parse(localStorage.getItem('userObject')).id;
  }
  constructor(http, router, bankService) {
    this.http = http;
    this.router = router;
    this.bankService = bankService;
    // empty string fields treated as falsey, workaround for strict typechecking
    this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.tokenExpirationTimer = null;
  }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) {
  return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_bank_service_bank_service__WEBPACK_IMPORTED_MODULE_1__.BankService));
};
AuthorizationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthorizationService,
  factory: AuthorizationService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6940:
/*!*******************************************************!*\
  !*** ./src/app/services/bank-service/bank.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankService": () => (/* binding */ BankService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class BankService {
  // get the word bank
  // update the word bank
  constructor(http) {
    this.http = http;
    this.disambiguation = {
      "Masc": "Masculine",
      "Fem": "Feminine",
      "Past": "Past",
      "Fut": "Future",
      "Pres": "Present",
      "Imp": "Imperfect",
      "Pqp": "Pluperfect",
      "Plur": "Plural",
      "Sing": "Singular",
      "Fin": "Finite",
      "Inf": "Infinitive",
      "Part": "Participle",
      "Ger": "Gerund",
      "Ind": "Indicative",
      "Cnd": "Conditional",
      "Sub": "Subjunctive",
      "3": "3rd Person"
    };
  }
  getBank(user) {
    // get bank from DB, set local vars
    return this.http.get(`http://localhost:3000/user/getBank/${user.id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(bankResponse => {
      this.known = new Set(bankResponse.bank.known);
      this.learning = bankResponse.bank.learning;
      console.log("bank response of learning:" + bankResponse.bank.learning.toString());
      console.log("Inside getBank:" + this.learning);
    }));
  }
  updateBank(user) {
    console.log("Inside update:" + this.learning);
    let bank = {
      known: Array.from(this.known.values()),
      learning: this.learning
    };
    return this.http.patch(`http://localhost:3000/user/updateBank/${user.id}`, bank);
  }
  addToKnown(pageContent) {
    // Closest regex so far: \b[A-Za-zÀ-Öz-öø-ÿ’é]+\b
    // Need to tokenize, otherwise words will be affected by punctuation
    // /\b[A-Za-zÀ-Öz-öø-ÿ’é\u00E0]+\b/g
    const knownWords = pageContent.toLowerCase().match(/[A-Za-zÀ-Öz-öø-ÿ’éà]+/g);
    knownWords.forEach(word => {
      this.known.add(word);
    });
    this.learning.forEach(entry => {
      if (this.known.has(entry.word)) {
        this.known.delete(entry.word);
      }
    });
  }
  clearBank(user) {
    return this.http.delete(`http://localhost:3000/user/clearBank/${user.id}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)(res => {
      console.log(res);
    }));
  }
}
BankService.ɵfac = function BankService_Factory(t) {
  return new (t || BankService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
BankService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BankService,
  factory: BankService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4206:
/*!*******************************************************************************!*\
  !*** ./src/app/services/reading-deactivate-guard/reading-deactivate.guard.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadingDeactivateGuard": () => (/* binding */ ReadingDeactivateGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authorization-service/authorization.service */ 9141);
/* harmony import */ var _bank_service_bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank-service/bank.service */ 6940);



class ReadingDeactivateGuard {
  constructor(authService, bankService) {
    this.authService = authService;
    this.bankService = bankService;
  }
  canDeactivate(component, currentRoute, currentState, nextState) {
    return component.canDeactivate();
  }
}
ReadingDeactivateGuard.ɵfac = function ReadingDeactivateGuard_Factory(t) {
  return new (t || ReadingDeactivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_bank_service_bank_service__WEBPACK_IMPORTED_MODULE_1__.BankService));
};
ReadingDeactivateGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ReadingDeactivateGuard,
  factory: ReadingDeactivateGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9648:
/*!*****************************************************************************!*\
  !*** ./src/app/services/review-deactivate-guard/review-deactivate.guard.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewDeactivateGuard": () => (/* binding */ ReviewDeactivateGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authorization-service/authorization.service */ 9141);
/* harmony import */ var _bank_service_bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank-service/bank.service */ 6940);



class ReviewDeactivateGuard {
  constructor(authService, bankService) {
    this.authService = authService;
    this.bankService = bankService;
  }
  canDeactivate(component, currentRoute, currentState, nextState) {
    return component.canDeactivate();
  }
}
ReviewDeactivateGuard.ɵfac = function ReviewDeactivateGuard_Factory(t) {
  return new (t || ReviewDeactivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authorization_service_authorization_service__WEBPACK_IMPORTED_MODULE_0__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_bank_service_bank_service__WEBPACK_IMPORTED_MODULE_1__.BankService));
};
ReviewDeactivateGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ReviewDeactivateGuard,
  factory: ReviewDeactivateGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2338:
/*!*********************************************************************!*\
  !*** ./src/app/services/user-config-service/user-config.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserConfigService": () => (/* binding */ UserConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class UserConfigService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.userChosenLang = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
  }
  changeUserChosenLanguage(newLang) {
    this.userChosenLang.next(newLang);
  }
  getUserConfig(user) {
    // id as a request parameter
    return this.httpClient.get(`http://localhost:3000/user/getSettings/${user.id}`);
  }
  updateUserConfig(user, userConfig) {
    // Make a PATCH request to update the User object
    return this.httpClient.patch(`http://localhost:3000/user/updateSettings/${user.id}`, {
      userConfig
    });
  }
}
UserConfigService.ɵfac = function UserConfigService_Factory(t) {
  return new (t || UserConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
UserConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: UserConfigService,
  factory: UserConfigService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  authURL: "http://localhost:3000/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map