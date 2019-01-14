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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_song_page_song_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/song-page/song-page.component */ "./src/app/components/song-page/song-page.component.ts");
/* harmony import */ var _components_song_lyric_page_song_lyric_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/song-lyric-page/song-lyric-page.component */ "./src/app/components/song-lyric-page/song-lyric-page.component.ts");






var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "songPage", component: _components_song_page_song_page_component__WEBPACK_IMPORTED_MODULE_4__["SongPageComponent"] },
    { path: "songLyricPage", component: _components_song_lyric_page_song_lyric_page_component__WEBPACK_IMPORTED_MODULE_5__["SongLyricPageComponent"] },
    { path: "songLyricPage", component: _components_song_lyric_page_song_lyric_page_component__WEBPACK_IMPORTED_MODULE_5__["SongLyricPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mz-navbar [navbarClass]=\"'indigo lighten-1'\">\n  <div class=\"row\">\n    <mz-navbar-item-container class=\"col s1 offset-s5\" [align]=\"'right'\">\n      <mz-navbar-item><button class=\"btn-floating btn-large scale-transition blue lighten-4\" mz-button id=\"btn-sidenav-demo\">\n          Menu\n        </button></mz-navbar-item>\n    </mz-navbar-item-container>\n    <mz-navbar-item-container class=\"col s4 \">\n      <mz-navbar-item><button mz-button class=\" red btn-floating btn-large scale-transition orange lighten-1\"\n          routerLink=\"../home\">\n          Home\n        </button></mz-navbar-item>\n    </mz-navbar-item-container>\n  </div>\n</mz-navbar>\n<mz-sidenav [id]=\"'sidenav-demo'\" [collapseButtonId]=\"'btn-sidenav-demo'\">\n  <mz-sidenav-header>\n    <div>\n      <div class=\"row  \">\n        <div class=\"col s3 offset-s4 \"><p class=\"text-purple\">LyricO</p></div>\n      </div>\n    </div>\n  </mz-sidenav-header>\n  <mz-sidenav-subheader>Menu</mz-sidenav-subheader>\n  <mz-sidenav-divider></mz-sidenav-divider>\n  <mz-sidenav-link>\n    <a routerLink=\"home\" class=\"waves-effect\">Home</a>\n  </mz-sidenav-link>\n  <mz-sidenav-divider></mz-sidenav-divider>\n  <!-- <mz-sidenav-link [active]=\"true\">\n    <a routerLink=\"about\" class=\"waves-effect\">About Us</a>\n  </mz-sidenav-link> -->\n\n\n</mz-sidenav>\n\n<!-- <mz-modal #bottomSheetModal [fixedFooter]=\"true\" [bottomSheet]=\"true\" [options]=\"modalOptions\">\n  <mz-modal-header>\n    <h4>Modal Title</h4>\n  </mz-modal-header>\n  <mz-modal-content>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  </mz-modal-content>\n  <mz-modal-footer>\n    <button mz-button [flat]=\"true\" mz-modal-close>Disagree</button>\n    <button mz-button [flat]=\"true\" mz-modal-close>Agree</button>\n  </mz-modal-footer>\n</mz-modal> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background-color: #333333; }\n\n.mr {\n  margin-left: 60px;\n  min-width: 500%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSTpcXEFQXFxMREIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLDBCQUpZLEVBTWY7O0FBRUQ7RUFFSSxrQkFBaUI7RUFDakIsZ0JBQWUsRUFFbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbXljb2xvcjojMzMzMzMzO1xyXG5cclxuZGl2e1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRteWNvbG9yO1xyXG5cclxufVxyXG5cclxuLm1ye1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MDAlOztcclxuXHJcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LDB';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_materialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-materialize */ "./node_modules/ngx-materialize/fesm5/ngx-materialize.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_song_page_song_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/song-page/song-page.component */ "./src/app/components/song-page/song-page.component.ts");
/* harmony import */ var _components_song_card_song_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/song-card/song-card.component */ "./src/app/components/song-card/song-card.component.ts");
/* harmony import */ var _components_song_lyric_page_song_lyric_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/song-lyric-page/song-lyric-page.component */ "./src/app/components/song-lyric-page/song-lyric-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_get_musix_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/get-musix.service */ "./src/app/service/get-musix.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_song_page_song_page_component__WEBPACK_IMPORTED_MODULE_9__["SongPageComponent"],
                _components_song_card_song_card_component__WEBPACK_IMPORTED_MODULE_10__["SongCardComponent"],
                _components_song_lyric_page_song_lyric_page_component__WEBPACK_IMPORTED_MODULE_11__["SongLyricPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzButtonModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzInputModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzSidenavModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzNavbarModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzCardModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzDropdownModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzParallaxModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzTabModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzValidationModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzSelectModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzModalModule"],
                ngx_materialize__WEBPACK_IMPORTED_MODULE_5__["MzSpinnerModule"]
            ],
            providers: [_service_get_musix_service__WEBPACK_IMPORTED_MODULE_13__["GetMusixService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isLoading\">\n    <div class=\"row\">\n      \n      <div class=\"col s12\" style=\"margin-top:30%;\">&nbsp;</div>\n      <mz-spinner  class=\" col s3 offset-s5 \" [color]=\"'blue'\" [size]=\"'big'\">\n      </mz-spinner>\n    </div>\n  </div>\n\n<div class=\"container\" *ngIf=\"!isLoading\">\n  <div class=\"col s6 mt\"><img src=\"../../../assets/logo/instagram_profile_image.png\" width=\"30%\" alt=\"\"></div>\n  <div class=\"row\">\n    <h1>Find your favourite song's lyrics instantly! </h1>\n\n    <mz-tab [fixedTabWidth]=\"'true'\">\n\n      <mz-tab-item [label]=\"'By Artist'\" (click)=\"switcher(1)\">\n\n        <mz-input-container>\n\n          <input mz-input placeholder=\"Artist Name Here\" length=\"150\" type=\"search\" [(ngModel)]=\"artistName\" name=\"artistName\"\n            width=\"2001px\">\n\n          <button [routerLink]=\"['../songPage']\" mz-button type=\"submit\" (click)=\"getArtist()\">\n            <!-- Sends to song-page -->\n            Go\n          </button>\n\n        </mz-input-container>\n\n      </mz-tab-item>\n\n      <mz-tab-item [label]=\"'By Song'\" (click)=\"switcher(2)\">\n        <mz-input-container>\n\n          <input mz-input placeholder=\"Song Title Here\" length=\"150\" type=\"search\" [(ngModel)]=\"trackName\" name=\"trackName\"\n            width=\"2001px\">\n\n          <button [routerLink]=\"['../songPage']\" mz-button type=\"submit\" (click)=\"getTrack()\">\n            Go\n          </button>\n\n        </mz-input-container>\n      </mz-tab-item>\n      <!-- <mz-tab-item [label]=\"'By Luck'\" (click)=\"switcher(3)\">\n        <mz-input-container>\n\n          <input mz-input placeholder=\"Random Track Id Here ex:15246836\" length=\"150\" type=\"search\" [(ngModel)]=\"artistName\"\n            name=\"artistName\" width=\"2001px\">\n\n          <button [routerLink]=\"['../songPage']\" mz-button type=\"submit\" (click)=\"getArtist()\">\n            Go\n          </button>\n\n\n        </mz-input-container>\n      </mz-tab-item> -->\n      <mz-tab-item [label]=\"'Change Top Country'\">\n        <mz-input-container>\n\n          <mz-select-container>\n            <select mz-select [(ngModel)]=\"countryName\" name=\"countryName\" id=\"select\" [label]=\"'Label'\" [placeholder]=\"'Country '\" >\n\n              <option class=\"left circle\">USA</option>\n              <option class=\"left circle\">Egypt</option>\n              <option class=\"left circle\">Argentina</option>\n\n            </select>\n          </mz-select-container>\n\n          <button [routerLink]=\"['../home']\" mz-button type=\"submit\" (click)=\"changeCountry()\">\n            Go\n          </button>\n\n\n        </mz-input-container>\n      </mz-tab-item>\n    </mz-tab>\n\n\n\n    <h2>Here is the Top:{{tracks.length}} in: {{countryName}}</h2>\n    <app-song-card class=\"col s4 same\" *ngFor=\"let track of tracks\" [tracks]=\"track\"></app-song-card>\n  </div>\n\n</div>\n\n\n\n<!-- <mz-input-container>\n\n  <input mz-input [label]=\"''\" [validate]=\"true\" [dataError]=\"'Email is invalid'\" [dataSuccess]=\"'Email is valid'\"\n    id=\"email-input\" placeholder=\"Song Title Here\" length=\"150\" type=\"search\" [(ngModel)]=\"artistName\" name=\"artistName\">\n\n  <button [routerLink]=\"['../songPage']\" mz-button type=\"submit\" (click)=\"getArtist()\">\n    Go\n  </button>\n</mz-input-container> -->\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mt {\n  margin-top: 5px; }\n\n.same {\n  min-height: 0px;\n  margin-bottom: 40px; }\n\n::-webkit-input-placeholder {\n  color: #949191;\n  font-size: 1.5em; }\n\n::-ms-input-placeholder {\n  color: #949191;\n  font-size: 1.5em; }\n\n::placeholder {\n  color: #949191;\n  font-size: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0k6XFxBUFxcTERCL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRU0sZ0JBSkcsRUFLUjs7QUFFRDtFQUVNLGdCQUFlO0VBQ2Ysb0JBQW1CLEVBQ3hCOztBQUVEO0VBQWdCLGVBQXlCO0VBQUUsaUJBQWdCLEVBQUk7O0FBQS9EO0VBQWdCLGVBQXlCO0VBQUUsaUJBQWdCLEVBQUk7O0FBQS9EO0VBQWdCLGVBQXlCO0VBQUUsaUJBQWdCLEVBQUkiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtdCA6IDVweDtcclxuXHJcbi5tdHtcclxuICAgICBcclxuICAgICAgbWFyZ2luLXRvcDogJG10XHJcbn1cclxuXHJcbi5zYW1le1xyXG5cclxuICAgICAgbWluLWhlaWdodDogMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHsgY29sb3I6IHJnYigxNDgsIDE0NSwgMTQ1KTsgZm9udC1zaXplOiAxLjVlbTsgfVxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_get_musix_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/get-musix.service */ "./src/app/service/get-musix.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService) {
        this.dataService = dataService;
        this.isLoading = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getTopChart().subscribe(function (res) {
            /*       console.log(res);
             */ _this.data = res;
            _this.tracks = _this.data.message.body.track_list;
            _this.isLoading = false;
        });
    };
    HomeComponent.prototype.getArtist = function () {
        this.dataService.changeMessage(this.artistName);
    };
    HomeComponent.prototype.getTrack = function () {
        this.dataService.changeMessage(this.trackName);
    };
    HomeComponent.prototype.changeCountry = function () {
        var _this = this;
        console.log(this.countryCode);
        switch (this.countryName) {
            case "USA":
                this.countryCode = "us";
                break;
            case "Argentina":
                this.countryCode = "ar";
                break;
            case "Egypt":
                this.countryCode = "eg";
                break;
            default:
                break;
        }
        this.dataService.getTopChart(this.countryCode).subscribe(function (res) {
            /*       console.log(res);
             */ _this.data = res;
            _this.tracks = _this.data.message.body.track_list;
        });
    };
    HomeComponent.prototype.switcher = function (value) {
        this.dataService.changeMessage2(value);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_get_musix_service__WEBPACK_IMPORTED_MODULE_2__["GetMusixService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/song-card/song-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/song-card/song-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mz-card\n  class=\"purple lighten-3 white-text\"\n  [horizontal]=\"true\"\n  [hoverable]=\"true\">\n  <mz-card-image>\n    <!-- <img src=\"../../../assets/logo/favicon.png  \" /> -->\n    <!-- <button mz-button mz-halfway-fab [float]=\"true\">ICON</button> -->\n  </mz-card-image>\n  <!-- <mz-card-image-title>\n    Card Image Title\n  </mz-card-image-title> -->\n  <mz-card-title>\n    <strong><p class=\"text-lighten-1 black-text\">{{tracks.track.track_name}}</p></strong> \n  </mz-card-title>\n  <mz-card-content>\n    <p>Artist: {{tracks.track.artist_name}}</p>\n  </mz-card-content>\n  <mz-card-action>\n    <a class=\"text-darken-3 red-text\" [routerLink]=\"['/songLyricPage']\" (click)=\"getLyrics()\">Lyrics</a>\n  </mz-card-action>\n</mz-card>"

/***/ }),

/***/ "./src/app/components/song-card/song-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/song-card/song-card.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb25nLWNhcmQvSTpcXEFQXFxMREIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNvbmctY2FyZFxcc29uZy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvbmctY2FyZC9zb25nLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/song-card/song-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/song-card/song-card.component.ts ***!
  \*************************************************************/
/*! exports provided: SongCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongCardComponent", function() { return SongCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_get_musix_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/get-musix.service */ "./src/app/service/get-musix.service.ts");



var SongCardComponent = /** @class */ (function () {
    function SongCardComponent(dataService) {
        this.dataService = dataService;
    }
    SongCardComponent.prototype.ngOnInit = function () {
        /*     console.log(this.tracks ,"SONGS");
         */
    };
    SongCardComponent.prototype.getData = function () {
    };
    SongCardComponent.prototype.getLyrics = function () {
        this.dataService.changeMessage(this.tracks.track.track_id);
        this.dataService.changeMessage2(this.tracks.track);
    };
    SongCardComponent.prototype.getInfo = function () {
        this.dataService.changeMessage(this.tracks.track);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SongCardComponent.prototype, "tracks", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SongCardComponent.prototype, "track", void 0);
    SongCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-song-card',
            template: __webpack_require__(/*! ./song-card.component.html */ "./src/app/components/song-card/song-card.component.html"),
            styles: [__webpack_require__(/*! ./song-card.component.scss */ "./src/app/components/song-card/song-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_get_musix_service__WEBPACK_IMPORTED_MODULE_2__["GetMusixService"]])
    ], SongCardComponent);
    return SongCardComponent;
}());



/***/ }),

/***/ "./src/app/components/song-lyric-page/song-lyric-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/song-lyric-page/song-lyric-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isLoading\">\n  <div class=\"row\">\n    <div class=\"col s12\" style=\"margin-top:20%;\">&nbsp;</div>\n    <div class=\"col s12\">\n    </div>\n    <mz-spinner class=\" col s3 offset-s5 \" [color]=\"'blue'\" [size]=\"'big'\">\n    </mz-spinner>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s6 offset-s3\">\n    <mz-card class=\"purple lighten-1 white-text\" [horizontal]=\"true\" [hoverable]=\"true\">\n      <mz-card-image>\n        <!-- <img src=\"../../../assets/logo/favicon.png  \" /> -->\n        <!-- <button mz-button mz-halfway-fab [float]=\"true\">ICON</button> -->\n      </mz-card-image>\n      <!-- <mz-card-image-title>\n    Card Image Title\n  </mz-card-image-title> -->\n      <mz-card-title>\n        <strong>\n          <p class=\"text-lighten-5 red-text\">Song: <span class=\"text-lighten-3 yellow-text\">{{track_info.track_name}}</span></p>\n        </strong>\n      </mz-card-title>\n      <mz-card-content>\n        <p>Artist: <span class=\"text-lighten-3 red-text\">{{track_info.artist_name}}</span></p>\n      </mz-card-content>\n      <mz-card-action>\n        <a [routerLink]=\"['/home']\"></a>\n      </mz-card-action>\n\n      <mz-card-content>\n        <br>\n        Lyrics:\n        <p>{{lyric}}</p>\n      </mz-card-content>\n    </mz-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/song-lyric-page/song-lyric-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/song-lyric-page/song-lyric-page.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29uZy1seXJpYy1wYWdlL3NvbmctbHlyaWMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/song-lyric-page/song-lyric-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/song-lyric-page/song-lyric-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: SongLyricPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongLyricPageComponent", function() { return SongLyricPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_get_musix_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/get-musix.service */ "./src/app/service/get-musix.service.ts");



var SongLyricPageComponent = /** @class */ (function () {
    function SongLyricPageComponent(dataService) {
        this.dataService = dataService;
        this.isLoading = true;
    }
    SongLyricPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentMessage2.subscribe(function (message) { return _this.track_info = message; });
        console.log(this.track_info);
        this.dataService.currentMessage.subscribe(function (message) { return _this.track_id = message; });
        this.dataService.getLyrics(this.track_id).subscribe(function (res) {
            _this.data = res;
            _this.lyric = _this.data.message.body.lyrics.lyrics_body;
            console.log(_this.data);
            _this.isLoading = false;
        });
    };
    SongLyricPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-song-lyric-page',
            template: __webpack_require__(/*! ./song-lyric-page.component.html */ "./src/app/components/song-lyric-page/song-lyric-page.component.html"),
            styles: [__webpack_require__(/*! ./song-lyric-page.component.scss */ "./src/app/components/song-lyric-page/song-lyric-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_get_musix_service__WEBPACK_IMPORTED_MODULE_2__["GetMusixService"]])
    ], SongLyricPageComponent);
    return SongLyricPageComponent;
}());



/***/ }),

/***/ "./src/app/components/song-page/song-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/song-page/song-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isLoading\">\n    <div class=\"row\">\n      <div class=\"col s12\" style=\"margin-top:30%;\">&nbsp;</div>\n      <mz-spinner  class=\" col s3 offset-s5 \" [color]=\"'yellow'\" [size]=\"'big'\">\n      </mz-spinner>\n    </div>\n  </div>\n\n<div class=\"container\" *ngIf=\"!isLoading\">\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <div class=\"row\">\n       <button [routerLink]=\"['../home']\" mz-button>\n          Back\n        </button>\n      </div>\n      \n      <app-song-card class=\"col s4 same\" *ngFor=\"let track of tracks\" [tracks]=\"track\"></app-song-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/song-page/song-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/song-page/song-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29uZy1wYWdlL3NvbmctcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/song-page/song-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/song-page/song-page.component.ts ***!
  \*************************************************************/
/*! exports provided: SongPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongPageComponent", function() { return SongPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_get_musix_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/get-musix.service */ "./src/app/service/get-musix.service.ts");



var SongPageComponent = /** @class */ (function () {
    function SongPageComponent(dataService) {
        this.dataService = dataService;
        this.tracks = [];
        this.isLoading = true;
    }
    SongPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentMessage2.subscribe(function (message) { return _this.switch = message; });
        switch (this.switch) {
            case 1:
                this.getArtist();
                break;
            case 2:
                this.getTrack();
                break;
            case 3:
                this.getLuck();
                break;
            default:
                break;
        }
    };
    SongPageComponent.prototype.getArtist = function () {
        var _this = this;
        this.dataService.currentMessage.subscribe(function (message) { return _this.artistName = message; });
        this.dataService.getData(this.artistName).subscribe(function (res) {
            _this.data = res;
            _this.tracks = _this.data.message.body.track_list;
            console.log("By Artist");
            console.log(_this.tracks);
            _this.isLoading = false;
        });
    };
    SongPageComponent.prototype.getTrack = function () {
        var _this = this;
        this.dataService.currentMessage.subscribe(function (message) { return _this.trackName = message; });
        this.dataService.getTrackData(this.trackName).subscribe(function (res) {
            _this.data = res;
            _this.tracks = _this.data.message.body.track_list;
            console.log("By Song Name");
            console.log(_this.tracks);
            _this.isLoading = false;
        });
    };
    SongPageComponent.prototype.getLuck = function () {
        var _this = this;
        this.dataService.currentMessage.subscribe(function (message) { return _this.luckyId = message; });
        this.dataService.getLucky(this.luckyId).subscribe(function (res) {
            _this.data = res;
            _this.track = _this.data.message.body.track;
            console.log(_this.data);
            console.log(_this.track);
            _this.isLoading = false;
        });
    };
    SongPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-song-page',
            template: __webpack_require__(/*! ./song-page.component.html */ "./src/app/components/song-page/song-page.component.html"),
            styles: [__webpack_require__(/*! ./song-page.component.scss */ "./src/app/components/song-page/song-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_get_musix_service__WEBPACK_IMPORTED_MODULE_2__["GetMusixService"]])
    ], SongPageComponent);
    return SongPageComponent;
}());



/***/ }),

/***/ "./src/app/service/get-musix.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/get-musix.service.ts ***!
  \**********************************************/
/*! exports provided: GetMusixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMusixService", function() { return GetMusixService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var GetMusixService = /** @class */ (function () {
    function GetMusixService(http) {
        this.http = http;
        this.apikey = "286ea642d7f4fa304c78773de47565cd";
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]("DeFult Messas");
        this.messageSource2 = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.currentMessage = this.messageSource.asObservable();
        this.currentMessage2 = this.messageSource2.asObservable();
        this.getThree();
    }
    GetMusixService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    GetMusixService.prototype.changeMessage2 = function (message) {
        this.messageSource2.next(message);
    };
    GetMusixService.prototype.getData = function (name) {
        return this.http.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=" + name + "&page_size=100&page=1&s_track_rating=desc&apikey=" + this.apikey);
    };
    GetMusixService.prototype.getTrackData = function (track) {
        if (track === void 0) { track = "billie jean"; }
        return this.http.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=" + track + "&page_size=100&apikey=" + this.apikey);
    };
    GetMusixService.prototype.getLucky = function (track) {
        return this.http.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=" + track + "&apikey=" + this.apikey);
    };
    GetMusixService.prototype.getTopChart = function (country) {
        if (country === void 0) { country = "us"; }
        return this.http.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=100&country=" + country + "&f_has_lyrics=1&apikey=" + this.apikey);
    };
    GetMusixService.prototype.getLyrics = function (id) {
        return this.http.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + id + "&apikey=" + this.apikey); /* .subscribe((res) => console.log(res)) */
    };
    GetMusixService.prototype.getThree = function () {
        this.http.get("matcher.track.get?q_track=Love%20the%20Way%20You%20Lie%20(Eminem%20and%20Rihanna)&q_artist=Eminem&apikey=" + this.apikey)
            .subscribe(function (res) { return console.log(res); });
    };
    GetMusixService.prototype.getArtistData = function () {
        return this.http.get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/artist.get?artist_id=118&apikey=" + this.apikey);
    };
    GetMusixService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GetMusixService);
    return GetMusixService;
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
var environment = {
    production: false
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

module.exports = __webpack_require__(/*! I:\AP\LDB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map