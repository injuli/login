(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/table/table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _pages_principal_principal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/principal/principal.component */ "./src/app/pages/principal/principal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var app_routes = [
    { path: 'table', component: _pages_table_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"] },
    { path: 'principal', component: _pages_principal_principal_component__WEBPACK_IMPORTED_MODULE_3__["PrincipalComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'login';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule, PizzaPartyAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyAppModule", function() { return PizzaPartyAppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_servicio_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/servicio/services.component */ "./src/app/pages/servicio/services.component.ts");
/* harmony import */ var _pages_works_works_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/works/works.component */ "./src/app/pages/works/works.component.ts");
/* harmony import */ var _pages_clientes_clients_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/clientes/clients.component */ "./src/app/pages/clientes/clients.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_photoswipe_photoswipe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/photoswipe/photoswipe.component */ "./src/app/pages/photoswipe/photoswipe.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_table_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/table/table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_listar_info_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/listar-info.service */ "./src/app/services/listar-info.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_principal_principal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/principal/principal.component */ "./src/app/pages/principal/principal.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig;






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _pages_servicio_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _pages_works_works_component__WEBPACK_IMPORTED_MODULE_11__["WorksComponent"],
                _pages_clientes_clients_component__WEBPACK_IMPORTED_MODULE_12__["ClientsComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _pages_photoswipe_photoswipe_component__WEBPACK_IMPORTED_MODULE_14__["PhotoswipeComponent"],
                _pages_table_table_component__WEBPACK_IMPORTED_MODULE_16__["TableComponent"],
                _pages_principal_principal_component__WEBPACK_IMPORTED_MODULE_22__["PrincipalComponent"],
            ],
            imports: [
                _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(firebaseConfig),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"].enablePersistence()
            ],
            providers: [
                _services_listar_info_service__WEBPACK_IMPORTED_MODULE_18__["ListarInfoService"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__["AngularFireAuth"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var PizzaPartyAppModule = /** @class */ (function () {
    function PizzaPartyAppModule() {
    }
    return PizzaPartyAppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id='about' class=\"s-about\">\n\n  <div class=\"row section-header has-bottom-sep\" data-aos=\"fade-up\">\n      <div class=\"col-full\">\n          <h3 class=\"subhead subhead--dark\">Hello There</h3>\n          <h1 class=\"display-1 display-1--light\">We Are Glint</h1>\n      </div>\n  </div> <!-- end section-header -->\n\n  <div class=\"row about-desc\" data-aos=\"fade-up\">\n      <div class=\"col-full\">\n          <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. \n          </p>\n      </div>\n  </div> <!-- end about-desc -->\n\n  <div class=\"row about-stats stats block-1-4 block-m-1-2 block-mob-full\" data-aos=\"fade-up\">\n          \n      <div class=\"col-block stats__col \">\n          <div class=\"stats__count\">127</div>\n          <h5>Awards Received</h5>\n      </div>\n      <div class=\"col-block stats__col\">\n          <div class=\"stats__count\">1505</div>\n          <h5>Cups of Coffee</h5>\n      </div>\n      <div class=\"col-block stats__col\">\n          <div class=\"stats__count\">109</div>\n          <h5>Projects Completed</h5>\n      </div>\n      <div class=\"col-block stats__col\">\n          <div class=\"stats__count\">102</div>\n          <h5>Happy Clients</h5> \n      </div>\n\n  </div> <!-- end about-stats -->\n\n  <div class=\"about__line\"></div>\n\n</section>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/clientes/clients.component.css":
/*!******************************************************!*\
  !*** ./src/app/pages/clientes/clients.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/clientes/clients.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/clientes/clients.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"clients\" class=\"s-clients\">\n\n  <div class=\"row section-header\" data-aos=\"fade-up\">\n      <div class=\"col-full\">\n          <h3 class=\"subhead\">Our Clients</h3>\n          <h1 class=\"display-2\">Glint has been honored to\n          partner up with these clients</h1>\n      </div>\n  </div> <!-- end section-header -->\n\n  <div class=\"row clients-outer\" data-aos=\"fade-up\">\n      <div class=\"col-full\">\n          <div class=\"clients\">\n              \n              <a href=\"#0\" title=\"\" class=\"clients__slide\"><img src=\"assets/images/clients/apple.png\" /></a>\n              <a href=\"#0\" title=\"\" class=\"clients__slide\"><img src=\"assets/images/clients/atom.png\" /></a>\n              <a href=\"#0\" title=\"\" class=\"clients__slide\"><img src=\"assets/images/clients/blackberry.png\" /></a>\n              <a href=\"#0\" title=\"\" class=\"clients__slide\"><img src=\"assets/images/clients/dropbox.png\" /></a>\n              <a href=\"#0\" title=\"\" class=\"clients__slide\"><img src=\"assets/images/clients/envato.png\" /></a>\n              <a href=\"#0\" title=\"\" class=\"clients__slide\"><img src=\"assets/images/clients/firefox.png\" /></a>\n              <a href=\"#0\" title=\"\" class=\"clients__slide\"><img src=\"assets/images/clients/joomla.png\" /></a>\n              <a href=\"#0\" title=\"\" class=\"clients__slide\"><img src=\"assets/images/clients/magento.png\" /></a>\n               \n          </div> <!-- end clients -->\n      </div> <!-- end col-full -->\n  </div> <!-- end clients-outer -->\n\n  <div class=\"row clients-testimonials\" data-aos=\"fade-up\">\n      <div class=\"col-full\">\n          <div class=\"testimonials\">\n\n              <div class=\"testimonials__slide\">\n\n                  <p>Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. \n                  Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.\n                  Excepturi nam cupiditate culpa doloremque deleniti repellat.</p>\n\n                  <img src=\"assets/images/avatars/user-01.jpg\" alt=\"Author image\" class=\"testimonials__avatar\">\n                  <div class=\"testimonials__info\">\n                      <span class=\"testimonials__name\">Tim Cook</span> \n                      <span class=\"testimonials__pos\">CEO, Apple</span>\n                  </div>\n\n              </div>\n\n              <div class=\"testimonials__slide\">\n                  \n                  <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.\n                  Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</p>\n\n                  <img src=\"assets/images/avatars/user-05.jpg\" alt=\"Author image\" class=\"testimonials__avatar\">\n                  <div class=\"testimonials__info\">\n                      <span class=\"testimonials__name\">Sundar Pichai</span> \n                      <span class=\"testimonials__pos\">CEO, Google</span>\n                  </div>\n\n              </div>\n\n              <div class=\"testimonials__slide\">\n                  \n                  <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  \n                  Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</p>\n\n                  <img src=\"assets/images/avatars/user-02.jpg\" alt=\"Author image\" class=\"testimonials__avatar\">\n                  <div class=\"testimonials__info\">\n                      <span class=\"testimonials__name\">Satya Nadella</span> \n                      <span class=\"testimonials__pos\">CEO, Microsoft</span>\n                  </div>\n\n              </div>\n\n          </div><!-- end testimonials -->\n          \n      </div> <!-- end col-full -->\n  </div> <!-- end client-testimonials -->\n\n</section>"

/***/ }),

/***/ "./src/app/pages/clientes/clients.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/clientes/clients.component.ts ***!
  \*****************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/pages/clientes/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/pages/clientes/clients.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home\" class=\"s-home target-section\" data-parallax=\"scroll\" data-image-src=\"assets/images/hero-bg.jpg\" data-natural-width=3000 data-natural-height=2000 data-position-y=center>\n\n  <div class=\"overlay\"></div>\n  <div class=\"shadow-overlay\"></div>\n\n  <div class=\"home-content\">\n\n      <div class=\"row home-content__main\">\n\n          <h3>Welcome to Glint</h3>\n\n          <h1>\n              We are a creative group <br>\n              of people who design <br>\n              influential brands and <br>\n              digital experiences.\n          </h1>\n\n          <div class=\"home-content__buttons\">\n              <a href=\"#contact\" class=\"smoothscroll btn btn--stroke\">\n                  Start a Project\n              </a>\n              <a href=\"#about\" class=\"smoothscroll btn btn--stroke\">\n                  More About Us\n              </a>\n          </div>\n\n      </div>\n\n      <div class=\"home-content__scroll\">\n          <a href=\"#about\" class=\"scroll-link smoothscroll\">\n              <span>Scroll Down</span>\n          </a>\n      </div>\n\n      <div class=\"home-content__line\"></div>\n\n  </div> <!-- end home-content -->\n\n\n  <ul class=\"home-social\">\n      <li>\n          <a href=\"#0\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i><span>Facebook</span></a>\n      </li>\n      <li>\n          <a href=\"#0\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i><span>Twiiter</span></a>\n      </li>\n      <li>\n          <a href=\"#0\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i><span>Instagram</span></a>\n      </li>\n      <li>\n          <a href=\"#0\"><i class=\"fa fa-behance\" aria-hidden=\"true\"></i><span>Behance</span></a>\n      </li>\n      <li>\n          <a href=\"#0\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i><span>Dribbble</span></a>\n      </li>\n  </ul> \n\n</section> "

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"s-contact\">\n\n  <div class=\"overlay\"></div>\n  <div class=\"contact__line\"></div>\n\n  <div class=\"row section-header\" data-aos=\"fade-up\">\n      <div class=\"col-full\">\n          <h3 class=\"subhead\">Contact Us</h3>\n          <h1 class=\"display-2 display-2--light\">Reach out for a new project or just say hello</h1>\n      </div>\n  </div>\n\n  <div class=\"row contact-content\" data-aos=\"fade-up\">\n      \n      <div class=\"contact-primary\">\n\n          <h3 class=\"h6\">Registrar</h3>\n\n          <form name=\"contactForm\" id=\"contactForm\" method=\"post\" action=\"\" novalidate=\"novalidate\">\n              <fieldset>\n\n              <div class=\"form-field\">\n                  <input [(ngModel)]=\"nombreConctacto\" name=\"contactName\" type=\"text\" id=\"contactName\" placeholder=\"Nombre\" value=\"\" minlength=\"2\" required=\"\" aria-required=\"true\" class=\"full-width\">\n              </div>\n\n              <div class=\"form-field\">\n                  <input [(ngModel)]=\"correo\" name=\"contactEmail\" type=\"email\" id=\"contactEmail\" placeholder=\"Correo\" value=\"\" required=\"\" aria-required=\"true\" class=\"full-width\">\n              </div>\n              <div class=\"form-field\">\n                  <input [(ngModel)]=\"asunto\" name=\"contactSubject\" type=\"text\" id=\"contactSubject\" placeholder=\"Asunto\" value=\"\" class=\"full-width\">\n              </div>\n              <div class=\"form-field\">\n                  <textarea [(ngModel)]=\"mensaje\" name=\"contactMessage\" id=\"contactMessage\" placeholder=\"Mensaje\" rows=\"10\" cols=\"50\" required=\"\" aria-required=\"true\" class=\"full-width\"></textarea>\n              </div>\n              <div class=\"form-field\">\n                  <button (click)=\"addUser()\" class=\"full-width btn--primary\">Registrar</button>\n                  <div class=\"submit-loader\">\n                      <div class=\"text-loader\">Sending...</div>\n                      <div class=\"s-loader\">\n                          <div class=\"bounce1\"></div>\n                          <div class=\"bounce2\"></div>\n                          <div class=\"bounce3\"></div>\n                      </div>\n                  </div>\n              </div>\n\n              </fieldset>\n          </form>\n\n\n          <h3 class=\"h6\">Iniciar Sesión</h3>\n\n          <form name=\"contactForm\" id=\"contactForm\" method=\"post\" action=\"\" novalidate=\"novalidate\">\n              <fieldset>\n\n              <div class=\"form-field\">\n                  <input [(ngModel)]=\"nombreConctacto\" name=\"contactName\" type=\"text\" id=\"contactName\" placeholder=\"Nombre\" value=\"\" minlength=\"2\" required=\"\" aria-required=\"true\" class=\"full-width\">\n              </div>\n\n              <div class=\"form-field\">\n                  <button (click)=\"ingresar()\" class=\"full-width btn--primary\">Iniciar Sesión</button>\n \n                  <div class=\"submit-loader\">\n                      <div class=\"text-loader\">Sending...</div>\n                      <div class=\"s-loader\">\n                          <div class=\"bounce1\"></div>\n                          <div class=\"bounce2\"></div>\n                          <div class=\"bounce3\"></div>\n                      </div>\n                  </div>\n              </div>\n\n              </fieldset>\n          </form>\n\n          <!-- contact-warning -->\n          <div class=\"message-warning\">\n              Something went wrong. Please try again.\n          </div> \n      \n          <!-- contact-success -->\n          <div class=\"message-success\">\n              Your message was sent, thank you!<br>\n          </div>\n\n      </div> <!-- end contact-primary -->\n\n      <div class=\"contact-secondary\">\n          <div class=\"contact-info\">\n\n              <h3 class=\"h6 hide-on-fullwidth\">Contact Info</h3>\n\n              <div class=\"cinfo\">\n                  <h5>Where to Find Us</h5>\n                  <p>\n                      1600 Amphitheatre Parkway<br>\n                      Mountain View, CA<br>\n                      94043 US\n                  </p>\n              </div>\n\n              <div class=\"cinfo\">\n                  <h5>Email Us At</h5>\n                  <p>\n                      contact@glintsite.com<br>\n                      info@glintsite.com\n                  </p>\n              </div>\n\n              <div class=\"cinfo\">\n                  <h5>Call Us At</h5>\n                  <p>\n                      Phone: (+63) 555 1212<br>\n                      Mobile: (+63) 555 0100<br>\n                      Fax: (+63) 555 0101\n                  </p>\n              </div>\n\n              <ul class=\"contact-social\">\n                  <li>\n                      <a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n                  </li>\n                  <li>\n                      <a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                  </li>\n                  <li>\n                      <a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                  </li>\n                  <li>\n                      <a href=\"#\"><i class=\"fa fa-behance\" aria-hidden=\"true\"></i></a>\n                  </li>\n                  <li>\n                      <a href=\"#\"><i class=\"fa fa-dribbble\" aria-hidden=\"true\"></i></a>\n                  </li>\n              </ul> <!-- end contact-social -->\n\n          </div> <!-- end contact-info -->\n      </div> <!-- end contact-secondary -->\n\n  </div> <!-- end contact-content -->\n\n  <div>\n\n    \n  </div>\n\n</section> "

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _services_listar_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/listar-info.service */ "./src/app/services/listar-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AuthService } from './core/auth.service';




var LoginComponent = /** @class */ (function () {
    function LoginComponent(afs, iniciar, router) {
        this.afs = afs;
        this.iniciar = iniciar;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.usuarioDoc = this.afs.doc('usuarios/0zNh9emudI3vf9jXEtLVs');
        this.listUser().subscribe(function (resp) {
            console.log(resp);
        });
        // this.usuarios = this.usuarioDoc.valueChanges();
    };
    LoginComponent.prototype.addUser = function () {
        var usuario = {
            nombre: this.nombreConctacto,
            correo: this.correo,
            asunto: this.asunto,
            mensaje: this.mensaje
        };
        console.log(usuario);
        this.afs.collection('usuarios').add(usuario);
    };
    LoginComponent.prototype.listUser = function () {
        return this.afs.collection('usuarios').valueChanges();
    };
    LoginComponent.prototype.ingresar = function () {
        var _this = this;
        this.iniciar.login().then(function () {
            _this.router.navigate(['/table']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _services_listar_info_service__WEBPACK_IMPORTED_MODULE_3__["ListarInfoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/photoswipe/photoswipe.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/photoswipe/photoswipe.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/photoswipe/photoswipe.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/photoswipe/photoswipe.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div aria-hidden=\"true\" class=\"pswp\" role=\"dialog\" tabindex=\"-1\">\n\n  <div class=\"pswp__bg\"></div>\n  <div class=\"pswp__scroll-wrap\">\n\n      <div class=\"pswp__container\">\n          <div class=\"pswp__item\"></div>\n          <div class=\"pswp__item\"></div>\n          <div class=\"pswp__item\"></div>\n      </div>\n\n      <div class=\"pswp__ui pswp__ui--hidden\">\n          <div class=\"pswp__top-bar\">\n              <div class=\"pswp__counter\"></div><button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button> <button class=\"pswp__button pswp__button--share\" title=\n              \"Share\"></button> <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button> <button class=\"pswp__button pswp__button--zoom\" title=\n              \"Zoom in/out\"></button>\n              <div class=\"pswp__preloader\">\n                  <div class=\"pswp__preloader__icn\">\n                      <div class=\"pswp__preloader__cut\">\n                          <div class=\"pswp__preloader__donut\"></div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n              <div class=\"pswp__share-tooltip\"></div>\n          </div><button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\"></button> <button class=\"pswp__button pswp__button--arrow--right\" title=\n          \"Next (arrow right)\"></button>\n          <div class=\"pswp__caption\">\n              <div class=\"pswp__caption__center\"></div>\n          </div>\n      </div>\n\n  </div>\n\n</div>\n\n<div id=\"preloader\">\n  <div id=\"loader\">\n      <div class=\"line-scale-pulse-out\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/photoswipe/photoswipe.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/photoswipe/photoswipe.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoswipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoswipeComponent", function() { return PhotoswipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoswipeComponent = /** @class */ (function () {
    function PhotoswipeComponent() {
    }
    PhotoswipeComponent.prototype.ngOnInit = function () {
    };
    PhotoswipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photoswipe',
            template: __webpack_require__(/*! ./photoswipe.component.html */ "./src/app/pages/photoswipe/photoswipe.component.html"),
            styles: [__webpack_require__(/*! ./photoswipe.component.css */ "./src/app/pages/photoswipe/photoswipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoswipeComponent);
    return PhotoswipeComponent;
}());



/***/ }),

/***/ "./src/app/pages/principal/principal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/principal/principal.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/principal/principal.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/principal/principal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<app-home></app-home>\n<app-login></app-login>\n<app-about></app-about>\n<app-services></app-services>\n<app-works></app-works>\n<app-clients></app-clients>\n<app-photoswipe></app-photoswipe>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/principal/principal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/principal/principal.component.ts ***!
  \********************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/pages/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/pages/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/pages/servicio/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/servicio/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/servicio/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/servicio/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id='services' class=\"s-services\">\n\n  <div class=\"row section-header has-bottom-sep\" data-aos=\"fade-up\">\n      <div class=\"col-full\">\n          <h3 class=\"subhead\">What We Do</h3>\n          <h1 class=\"display-2\">We’ve got everything you need to launch and grow your business</h1>\n      </div>\n  </div> <!-- end section-header -->\n\n  <div class=\"row services-list block-1-2 block-tab-full\">\n\n      <div class=\"col-block service-item\" data-aos=\"fade-up\">\n          <div class=\"service-icon\">\n              <i class=\"icon-paint-brush\"></i>\n          </div>\n          <div class=\"service-text\">\n              <h3 class=\"h2\">Brand Identity</h3>\n              <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. \n              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.\n              Sunt suscipit voluptas ipsa in tempora esse soluta sint.\n              </p>\n          </div>\n      </div>\n\n      <div class=\"col-block service-item\" data-aos=\"fade-up\">\n          <div class=\"service-icon\">\n              <i class=\"icon-group\"></i>\n          </div>\n          <div class=\"service-text\">\n              <h3 class=\"h2\">Illustration</h3>\n              <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. \n              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.\n              Sunt suscipit voluptas ipsa in tempora esse soluta sint.\n              </p>\n          </div>\n      </div>\n\n      <div class=\"col-block service-item\" data-aos=\"fade-up\">\n          <div class=\"service-icon\">\n              <i class=\"icon-megaphone\"></i>\n          </div>  \n          <div class=\"service-text\">\n              <h3 class=\"h2\">Marketing</h3>\n              <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. \n              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.\n              Sunt suscipit voluptas ipsa in tempora esse soluta sint.\n              </p>\n          </div>\n      </div>\n\n      <div class=\"col-block service-item\" data-aos=\"fade-up\">\n          <div class=\"service-icon\">\n              <i class=\"icon-earth\"></i>\n          </div>\n          <div class=\"service-text\">\n              <h3 class=\"h2\">Web Design</h3>\n              <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. \n              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.\n              Sunt suscipit voluptas ipsa in tempora esse soluta sint.\n              </p>\n          </div>\n      </div>\n\n      <div class=\"col-block service-item\" data-aos=\"fade-up\">\n          <div class=\"service-icon\">\n              <i class=\"icon-cube\"></i>\n          </div>\n          <div class=\"service-text\">\n              <h3 class=\"h2\">Packaging Design</h3>\n              <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. \n              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.\n              Sunt suscipit voluptas ipsa in tempora esse soluta sint.\n              </p>\n          </div>\n      </div>\n\n      <div class=\"col-block service-item\" data-aos=\"fade-up\">\n          <div class=\"service-icon\"><i class=\"icon-lego-block\"></i></div>\n          <div class=\"service-text\">\n              <h3 class=\"h2\">Web Development</h3>\n              <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. \n              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.\n              Sunt suscipit voluptas ipsa in tempora esse soluta sint.\n              </p>\n          </div>\n      </div>\n\n  </div> \n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/servicio/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/servicio/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/servicio/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/servicio/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/pages/table/table.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/table/table.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin-left: 3%;\n  margin-right: 8%;\n}\n\ntable {\n\n    width: auto 20px;\n  }\n\ninput[type=text], select, textarea {\n    width: 100%;\n    padding: 5px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    resize: vertical;\n}\n\nlabel {\n    padding: 12px 12px 12px 0;\n    display: inline-block;\n}\n\ninput[type=submit] {\n    background-color: #4CAF50;\n    color: white;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    float: right;\n}\n\ninput[type=submit]:hover {\n    background-color: #45a049;\n}\n\n.container {\n    border-radius: 2px;\n    margin-left: 5%;\n    background-color: #fff8f8;\n    padding: 15px;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-header-cell.mat-sort-header-sorted {\n  color: white;\n}"

/***/ }),

/***/ "./src/app/pages/table/table.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/table/table.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8 example-container \nexample-header\">\n  <table mat-table [dataSource] = \"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"nombre\">\n      <th mat-header-cell *matHeaderCellDef> Nombre </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.nombre}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container  matColumnDef=\"correo\">\n      <th mat-header-cell *matHeaderCellDef> Correo </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.correo}} </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr (click)=\"cambiardatos(row)\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n<br>\n<!-- <div class=\"\">\n  <form action=\"\">\n    <label for=\"fname\">Modificar</label>\n    <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\n\n    <label for=\"lname\">Last Name</label>\n    <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\">\n\n    <label for=\"country\">Country</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"australia\">Australia</option>\n      <option value=\"canada\">Canada</option>\n      <option value=\"usa\">USA</option>\n    </select>\n  \n    <input type=\"submit\" value=\"Modificar\">\n    <input type=\"submit\" value=\"Eliminar\">\n  </form>\n</div> -->\n\n<div class=\"container\">\n    <form action=\"/action_page.php\">\n      <label for=\"fname\">Modificar</label>\n      <br>\n\n      <label for=\"fname\">Nombre</label>\n      <input [(ngModel)]=\"nombre\" type=\"text\" id=\"nombre\" name=\"nombre\">\n\n      <label for=\"fname\">Correo</label>\n      <input [(ngModel)]=\"correo\" type=\"text\" id=\"correo\" name=\"correo\">\n\n      <label for=\"fname\">Asunto</label>\n      <input [(ngModel)]=\"asunto\" type=\"text\" id=\"asunto\" name=\"asunto\">\n\n      <label for=\"fname\">Mensaje</label>\n      <input [(ngModel)]=\"mensaje\" type=\"text\" id=\"mensaje\" name=\"mensaje\">\n\n      <div class=\"row\">\n        <input (click)=\"eliminarUsuario()\" type=\"submit\" value=\"Eliminar\">\n        <input (click)=\"editarUsuario()\" type=\"submit\" value=\"Modificar\">\n        <div class=\"submit-loader\">\n            <div class=\"text-loader\">Sending...</div>\n            <div class=\"s-loader\">\n                <div class=\"bounce1\"></div>\n                <div class=\"bounce2\"></div>\n                <div class=\"bounce3\"></div>\n            </div>\n        </div>\n      </div>\n    </form>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/table/table.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/table/table.component.ts ***!
  \************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_listar_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/listar-info.service */ "./src/app/services/listar-info.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = /** @class */ (function () {
    function TableComponent(afs, usuerService) {
        this.afs = afs;
        this.usuerService = usuerService;
        this.displayedColumns = ['nombre', 'correo'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"];
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listarDoc = this.afs.doc('usuarios/0zNh9emudI3vf9jXEtLVs');
        this.dataSource.paginator = this.paginator;
        this.consultar().subscribe(function (data) {
            _this.dataSource.data = data;
            console.log(data);
        });
    };
    TableComponent.prototype.cambiardatos = function (row) {
        this.nombre = row.nombre;
        this.correo = row.correo;
        this.asunto = row.asunto;
        this.mensaje = row.mensaje;
        this.id = row.id;
    };
    TableComponent.prototype.consultar = function () {
        return this.usuerService.consultar();
    };
    TableComponent.prototype.editarUsuario = function () {
        var usuario = {
            nombre: this.nombre,
            correo: this.correo,
            asunto: this.asunto,
            mensaje: this.mensaje
        };
        console.log(usuario);
        this.afs.doc('usuarios/' + this.id).set(usuario);
    };
    TableComponent.prototype.eliminarUsuario = function () {
        var usuario = {
            nombre: this.nombre,
            correo: this.correo,
            asunto: this.asunto,
            mensaje: this.mensaje
        };
        console.log(usuario);
        this.afs.doc('usuarios/' + this.id).delete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], TableComponent.prototype, "paginator", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/pages/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/pages/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _services_listar_info_service__WEBPACK_IMPORTED_MODULE_1__["ListarInfoService"]])
    ], TableComponent);
    return TableComponent;
}());

// const ELEMENT_DATA: Listar [] = [{nombre: this.nombre, correo: this.correo}];
// constructor(public listarInfoService: ListarInfoService) { }


/***/ }),

/***/ "./src/app/pages/works/works.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/works/works.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/works/works.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/works/works.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id='works' class=\"s-works\">\n\n  <div class=\"intro-wrap\">\n          \n      <div class=\"row section-header has-bottom-sep light-sep\" data-aos=\"fade-up\">\n          <div class=\"col-full\">\n              <h3 class=\"subhead\">Recent Works</h3>\n              <h1 class=\"display-2 display-2--light\">We love what we do, check out some of our latest works</h1>\n          </div>\n      </div> <!-- end section-header -->\n\n  </div> <!-- end intro-wrap -->\n\n  <div class=\"row works-content\">\n      <div class=\"col-full masonry-wrap\">\n          <div class=\"masonry\">\n\n              <div class=\"masonry__brick\" data-aos=\"fade-up\">\n                  <div class=\"item-folio\">\n                          \n                      <div class=\"item-folio__thumb\">\n                          <a href=\"assets/images/portfolio/gallery/g-shutterbug.jpg\" class=\"thumb-link\" title=\"Shutterbug\" data-size=\"1050x700\">\n                              <img src=\"assets/images/portfolio/lady-shutterbug.jpg\" \n                                   srcset=\"assets/images/portfolio/lady-shutterbug.jpg 1x, assets/images/portfolio/lady-shutterbug@2x.jpg 2x\" alt=\"\">\n                          </a>\n                      </div>\n\n                      <div class=\"item-folio__text\">\n                          <h3 class=\"item-folio__title\">\n                              Shutterbug\n                          </h3>\n                          <p class=\"item-folio__cat\">\n                              Branding\n                          </p>\n                      </div>\n\n                      <a href=\"https://www.behance.net/\" class=\"item-folio__project-link\" title=\"Project link\">\n                          <i class=\"icon-link\"></i>\n                      </a>\n\n                      <div class=\"item-folio__caption\">\n                          <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>\n                      </div>\n\n                  </div>\n              </div> <!-- end masonry__brick -->\n\n              <div class=\"masonry__brick\" data-aos=\"fade-up\">\n                  <div class=\"item-folio\">\n                          \n                      <div class=\"item-folio__thumb\">\n                          <a href=\"assets/images/portfolio/gallery/g-woodcraft.jpg\" class=\"thumb-link\" title=\"Woodcraft\" data-size=\"1050x700\">\n                              <img src=\"assets/images/portfolio/woodcraft.jpg\" \n                                   srcset=\"assets/images/portfolio/woodcraft.jpg 1x, assets/images/portfolio/woodcraft@2x.jpg 2x\" alt=\"\">\n                          </a>\n                      </div>\n\n                      <div class=\"item-folio__text\">\n                          <h3 class=\"item-folio__title\">\n                              Woodcraft\n                          </h3>\n                          <p class=\"item-folio__cat\">\n                              Web Design\n                          </p>\n                      </div>\n\n                      <a href=\"https://www.behance.net/\" class=\"item-folio__project-link\" title=\"Project link\">\n                          <i class=\"icon-link\"></i>\n                      </a>\n\n                      <div class=\"item-folio__caption\">\n                          <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>\n                      </div>\n\n                  </div>\n              </div> <!-- end masonry__brick -->\n\n              <div class=\"masonry__brick\" data-aos=\"fade-up\">\n                  <div class=\"item-folio\">\n                          \n                      <div class=\"item-folio__thumb\">\n                          <a href=\"assets/images/portfolio/gallery/g-beetle.jpg\" class=\"thumb-link\" title=\"The Beetle Car\" data-size=\"1050x700\">\n                              <img src=\"assets/images/portfolio/the-beetle.jpg\"\n                                   srcset=\"assets/images/portfolio/the-beetle.jpg 1x, assets/images/portfolio/the-beetle@2x.jpg 2x\" alt=\"\">\n                          </a>\n                      </div>\n\n                      <div class=\"item-folio__text\">\n                          <h3 class=\"item-folio__title\">\n                              The Beetle\n                          </h3>\n                          <p class=\"item-folio__cat\">\n                              Web Development\n                          </p>\n                      </div>\n\n                      <a href=\"https://www.behance.net/\" class=\"item-folio__project-link\" title=\"Project link\">\n                          <i class=\"icon-link\"></i>\n                      </a>\n\n                      <div class=\"item-folio__caption\">\n                          <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>\n                      </div>\n\n                  </div>\n              </div> <!-- end masonry__brick -->\n\n              <div class=\"masonry__brick\" data-aos=\"fade-up\">\n                  <div class=\"item-folio\">\n                          \n                      <div class=\"item-folio__thumb\">\n                          <a href=\"assets/images/portfolio/gallery/g-grow-green.jpg\" class=\"thumb-link\" title=\"Grow Green\" data-size=\"1050x700\">\n                              <img src=\"assets/images/portfolio/grow-green.jpg\" \n                                   srcset=\"assets/images/portfolio/grow-green.jpg 1x, assets/images/portfolio/grow-green@2x.jpg 2x\" alt=\"\">\n                          </a>\n                      </div>\n\n                      <div class=\"item-folio__text\">\n                          <h3 class=\"item-folio__title\">\n                              Grow Green\n                          </h3>\n                          <p class=\"item-folio__cat\">\n                              Branding\n                          </p>\n                      </div>\n\n                      <a href=\"https://www.behance.net/\" class=\"item-folio__project-link\" title=\"Project link\">\n                          <i class=\"icon-link\"></i>\n                      </a>\n\n                      <div class=\"item-folio__caption\">\n                          <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>\n                      </div>\n\n                  </div>\n              </div> <!-- end masonry__brick -->\n\n              <div class=\"masonry__brick\" data-aos=\"fade-up\">\n                  <div class=\"item-folio\">\n                          \n                      <div class=\"item-folio__thumb\">\n                          <a href=\"assets/images/portfolio/gallery/g-guitarist.jpg\" class=\"thumb-link\" title=\"Guitarist\" data-size=\"1050x700\">\n                              <img src=\"assets/images/portfolio/guitarist.jpg\" \n                                   srcset=\"assets/images/portfolio/guitarist.jpg 1x, assets/images/portfolio/guitarist@2x.jpg 2x\" alt=\"\">\n                          </a>\n                      </div>\n\n                      <div class=\"item-folio__text\">\n                          <h3 class=\"item-folio__title\">\n                              Guitarist\n                          </h3>\n                          <p class=\"item-folio__cat\">\n                              Web Design\n                          </p>\n                      </div>\n\n                      <a href=\"https://www.behance.net/\" class=\"item-folio__project-link\" title=\"Project link\">\n                          <i class=\"icon-link\"></i>\n                      </a>\n\n                      <div class=\"item-folio__caption\">\n                          <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>\n                      </div>\n\n                  </div>\n              </div> <!-- end masonry__brick -->\n\n              <div class=\"masonry__brick\" data-aos=\"fade-up\">\n                  <div class=\"item-folio\">\n                          \n                      <div class=\"item-folio__thumb\">\n                          <a href=\"assets/images/portfolio/gallery/g-palmeira.jpg\" class=\"thumb-link\" title=\"Palmeira\" data-size=\"1050x700\">\n                              <img src=\"assets/images/portfolio/palmeira.jpg\"\n                                   srcset=\"assets/images/portfolio/palmeira.jpg 1x, assets/images/portfolio/palmeira@2x.jpg 2x\" alt=\"\">\n                          </a>\n                      </div>\n\n                      <div class=\"item-folio__text\">\n                          <h3 class=\"item-folio__title\">\n                              Palmeira\n                          </h3>\n                          <p class=\"item-folio__cat\">\n                              Web Design\n                          </p>\n                      </div>\n\n                      <a href=\"https://www.behance.net/\" class=\"item-folio__project-link\" title=\"Project link\">\n                          <i class=\"icon-link\"></i>\n                      </a>\n\n                      <div class=\"item-folio__caption\">\n                          <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>\n                      </div>\n\n                  </div>\n              </div> <!-- end masonry__brick -->\n\n          </div> <!-- end masonry -->\n      </div> <!-- end col-full -->\n  </div> <!-- end works-content -->\n\n</section>"

/***/ }),

/***/ "./src/app/pages/works/works.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/works/works.component.ts ***!
  \************************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorksComponent = /** @class */ (function () {
    function WorksComponent() {
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/pages/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.css */ "./src/app/pages/works/works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorksComponent);
    return WorksComponent;
}());



/***/ }),

/***/ "./src/app/services/listar-info.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/listar-info.service.ts ***!
  \*************************************************/
/*! exports provided: ListarInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarInfoService", function() { return ListarInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListarInfoService = /** @class */ (function () {
    function ListarInfoService(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.cargarUsurios();
    }
    ListarInfoService.prototype.cargarUsurios = function () {
    };
    ListarInfoService.prototype.consultar = function () {
        return this.afs.collection('usuarios').snapshotChanges().pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    ListarInfoService.prototype.login = function () {
        return this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    ListarInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], ListarInfoService);
    return ListarInfoService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n\n  <div class=\"row footer-main\">\n\n      <div class=\"col-six tab-full left footer-desc\">\n\n          <div class=\"footer-logo\"></div>\n          Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.\n\n      </div>\n\n      <div class=\"col-six tab-full right footer-subscribe\">\n\n          <h4>Get Notified</h4>\n          <p>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>\n\n          <div class=\"subscribe-form\">\n              <form id=\"mc-form\" class=\"group\" novalidate=\"true\">\n                  <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email\" id=\"mc-email\" placeholder=\"Email Address\" required=\"\">\n                  <input type=\"submit\" name=\"subscribe\" value=\"Subscribe\">\n                  <label for=\"mc-email\" class=\"subscribe-message\"></label>\n              </form>\n          </div>\n\n      </div>\n\n  </div> <!-- end footer-main -->\n\n  <div class=\"row footer-bottom\">\n\n      <div class=\"col-twelve\">\n          <div class=\"copyright\">\n              <span>© Copyright Glint 2017</span> \n              <span>Site Template by <a href=\"https://www.colorlib.com/\">Colorlib</a></span>\t\n          </div>\n\n          <div class=\"go-top\">\n              <a class=\"smoothscroll\" title=\"Back to Top\" href=\"#top\"><i class=\"icon-arrow-up\" aria-hidden=\"true\"></i></a>\n          </div>\n      </div>\n\n  </div> <!-- end footer-bottom -->\n\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"s-header\">\n\n    <div class=\"header-logo\">\n        <a class=\"site-logo\" href=\"index.html\">\n            <img src=\"assets/images/logo.png\" alt=\"Homepage\">\n        </a>\n    </div>\n\n    <nav class=\"header-nav\">\n\n        <a href=\"#0\" class=\"header-nav__close\" title=\"close\"><span>Close</span></a>\n\n        <div class=\"header-nav__content\">\n            <h3>Navigation</h3>\n            \n            <ul class=\"header-nav__list\">\n                <li class=\"current\"><a class=\"smoothscroll\"  href=\"index.html\" title=\"home\">Home</a></li>\n                <li><a href=\"index.html#about\" title=\"about\">About</a></li>\n                <li><a href=\"index.html#services\" title=\"services\">Services</a></li>\n                <li><a href=\"index.html#works\" title=\"works\">Works</a></li>\n                <li><a href=\"index.html#clients\" title=\"clients\">Clients</a></li>\n                <li><a href=\"#contact\" title=\"contact\">Contact</a></li>\n            </ul>\n\n            <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href='#0'>voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>\n\n            <ul class=\"header-nav__social\">\n                <li>\n                    <a href=\"#0\"><i class=\"fa fa-facebook\"></i></a>\n                </li>\n                <li>\n                    <a href=\"#0\"><i class=\"fa fa-twitter\"></i></a>\n                </li>\n                <li>\n                    <a href=\"#0\"><i class=\"fa fa-instagram\"></i></a>\n                </li>\n                <li>\n                    <a href=\"#0\"><i class=\"fa fa-behance\"></i></a>\n                </li>\n                <li>\n                    <a href=\"#0\"><i class=\"fa fa-dribbble\"></i></a>\n                </li>\n            </ul>\n\n        </div> \n\n    </nav>  \n\n    <a class=\"header-menu-toggle\" href=\"#0\">\n        <span class=\"header-menu-text\">Menu</span>\n        <span class=\"header-menu-icon\"></span>\n    </a>\n\n</header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// export const environment = {
//   production: false
// };
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyC8J8lMR_ivterIM3tu1LYcurVEPYf-Bgo',
        authDomain: 'login-angular-d87c1.firebaseapp.com',
        databaseURL: 'https://login-angular-d87c1.firebaseio.com',
        projectId: 'login-angular-d87c1',
        storageBucket: 'login-angular-d87c1.appspot.com',
        messagingSenderId: '135115386118'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ingrid/Documentos/login/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map