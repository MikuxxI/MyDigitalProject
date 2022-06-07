webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
var PlaceService = /** @class */ (function () {
    function PlaceService() {
        this.placeList = [
            {
                name: "Restaurant 1",
                description: "Test Description 1",
                ville: "Rennes",
                photo: "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg"
            },
            {
                name: "Restaurant 2",
                description: "Test Description 2",
                ville: "Bruz",
                photo: "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg"
            },
            {
                name: "Restaurant 3",
                description: "Test Description 3",
                ville: "Noyal",
                photo: "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg"
            },
            {
                name: "Restaurant 3",
                description: "Test Description 3",
                ville: "Noyal",
                photo: "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg"
            },
            {
                name: "Restaurant 3",
                description: "Test Description 3",
                ville: "Noyal",
                photo: "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg"
            },
            {
                name: "Restaurant 3",
                description: "Test Description 3",
                ville: "Noyal",
                photo: "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg"
            },
            {
                name: "Restaurant 3",
                description: "Test Description 3",
                ville: "Noyal",
                photo: "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg"
            },
            {
                name: "Restaurant 3",
                description: "Test Description 3",
                ville: "Noyal",
                photo: "https://www.mrestaurant.fr/public/img/big/copyrightJulietteTreillet1927jpg_61446781283cb.jpg"
            },
        ];
    }
    return PlaceService;
}());

//# sourceMappingURL=place.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.homePage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="homePage" tabIcon="home"></ion-tab>\n  <ion-tab [root]="homePage" tabIcon="search"></ion-tab>\n  <ion-tab [root]="homePage" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="homePage" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleBookPage = /** @class */ (function () {
    function SingleBookPage(navParams, viewCtrl, placeService) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.placeService = placeService;
    }
    SingleBookPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get("index");
        this.place = this.placeService.placeList[this.index];
        this.description = this.place.description;
    };
    SingleBookPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    SingleBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-single-appareil",template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\pages\home\single-book\single-book.html"*/'<ion-header>\n  <ion-navbar style="background-image: url({{place.photo}})">\n    <ion-buttons>\n      <button ion-button clear (click)="dismissModal()"><ion-icon name="arrow-round-back"></ion-icon></button>\n    </ion-buttons>\n    <ion-title icon-start>{{place.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>{{place.name}}</ion-card-header>\n    <ion-card-content>\n      <p>Description : {{place.description}}</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button\n          col-8\n          ion-button\n          full\n        >\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\pages\home\single-book\single-book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]])
    ], SingleBookPage);
    return SingleBookPage;
}());

//# sourceMappingURL=single-book.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_single_book_single_book__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_cds_service__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_timeFormater__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_place_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_detail_place_detail_place__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_single_book_single_book__["a" /* SingleBookPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_detail_place_detail_place__["a" /* DetailPlace */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_single_book_single_book__["a" /* SingleBookPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_detail_place_detail_place__["a" /* DetailPlace */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__shared_timeFormater__["a" /* TimeFormater */],
                __WEBPACK_IMPORTED_MODULE_9__services_cds_service__["a" /* CdsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onNavigate = function (page) {
        this.content.setRoot(page);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("myContent"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\app\app.html"*/'<ion-menu side="right" [content]="myContent">\n  <ion-header color="customColor">\n    <ion-toolbar>\n      <div class="tamere">\n        <img src="../../assets/imgs/Logo2.png" height="40px"/>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item icon-start (click)="onNavigate(rootPage)">\n        <ion-icon name="power">Accueil</ion-icon>\n      </button>\n      <button ion-item icon-start (click)="onNavigate(rootPage)">\n        <ion-icon name="options">Recherche</ion-icon>\n      </button>\n      <button ion-item icon-start (click)="onNavigate(rootPage)">\n        <ion-icon name="options">Favoris</ion-icon>\n      </button>\n      <button ion-item icon-start (click)="onNavigate(rootPage)">\n        <ion-icon name="options">Communauté</ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="tabsPage" #myContent></ion-nav>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdsService; });
var CdsService = /** @class */ (function () {
    function CdsService() {
        this.cdsList = [
            {
                name: "Shakira",
                duree: 250,
                description: ["Test Description 1", "Test Description 2", "Test Description 3"],
                isLended: true
            },
            {
                name: "GIMS",
                duree: 124,
                description: ["Test Description 1", "Test Description 2", "Test Description 3"],
                isLended: false
            },
            {
                name: "ACDC",
                duree: 311,
                description: ["Test Description 1", "Test Description 2", "Test Description 3"],
                isLended: false
            },
        ];
    }
    return CdsService;
}());

//# sourceMappingURL=cds.service.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeFormater; });
var TimeFormater = /** @class */ (function () {
    function TimeFormater() {
    }
    TimeFormater.prototype.secondstotime = function (secs) {
        var t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        var s = t.toTimeString().substr(0, 8);
        if (secs > 86399)
            s = Math.floor((t.getDate() - Date.parse("1/1/70")) / 3600000) + s.substr(2);
        return s;
    };
    return TimeFormater;
}());

//# sourceMappingURL=timeFormater.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPlace; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Place__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPlace = /** @class */ (function () {
    function DetailPlace(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    DetailPlace.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_Place__["a" /* Place */])
    ], DetailPlace.prototype, "place", void 0);
    DetailPlace = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-single-place",template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\pages\home\detail-place\detail-place.html"*/'\n <div class="container">\n  <ion-img [src]="place.photo"></ion-img>\n  <ion-card>\n    <div class="title">\n      <ion-card-header>{{place.name}}</ion-card-header>\n     <ion-icon name="arrow-dropright-circle"></ion-icon>\n  </div>\n    <ion-card-content>\n      <p>Description : {{place.description}}</p>\n    </ion-card-content>\n  </ion-card>\n</div>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\pages\home\detail-place\detail-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], DetailPlace);
    return DetailPlace;
}());

//# sourceMappingURL=detail-place.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
var Place = /** @class */ (function () {
    function Place(name) {
        this.name = name;
        this.description = "Test";
        this.ville = "Rennes";
    }
    return Place;
}());

//# sourceMappingURL=Place.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_book_single_book__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl, placeService, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
        this.menuCtrl = menuCtrl;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.placeList = this.placeService.placeList.slice();
    };
    HomePage.prototype.onLoadLivre = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__single_book_single_book__["a" /* SingleBookPage */], {
            index: index,
        });
        modal.present();
    };
    HomePage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\pages\home\home.html"*/'  <ion-header>\n  <ion-navbar color="customColor">\n    <div class="tamere">\n      <img src="../../assets/imgs/Logo2.png" height="40px"/>\n    </div>\n    <ion-buttons start >\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <button\n      ion-item\n      *ngFor="let place of placeList; let i = index"\n      (click)="onLoadLivre(i)"\n      icon-start\n    >\n    <page-single-place [place]="place"></page-single-place>\n\n    </button>\n</ion-content>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\MyDigitalProject\FRONT\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map