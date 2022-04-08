webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cds_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_cd_single_cd__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CdsPage = /** @class */ (function () {
    function CdsPage(modalCtrl, cdService, menuCtrl) {
        this.modalCtrl = modalCtrl;
        this.cdService = cdService;
        this.menuCtrl = menuCtrl;
    }
    CdsPage.prototype.ionViewWillEnter = function () {
        this.cdsList = this.cdService.cdsList.slice();
    };
    CdsPage.prototype.onLoadLivre = function (index) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__single_cd_single_cd__["a" /* SingleCdPage */], {
            index: index,
        });
        modal.present();
    };
    CdsPage.prototype.onToggleMenu = function () {
        this.menuCtrl.open();
    };
    CdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-books",template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\cds\cds.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-title>Cds</ion-title>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button\n      ion-item\n      *ngFor="let cd of cdsList; let i = index"\n      (click)="onLoadLivre(i)"\n      icon-start\n    >\n    <ion-icon name="remove-circle" [color]="cd.isLended ? \'danger\': \'light\'">\n    </ion-icon>\n      {{cd.name}}\n\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\cds\cds.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_cds_service__["a" /* CdsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], CdsPage);
    return CdsPage;
}());

//# sourceMappingURL=cds.js.map

/***/ }),

/***/ 101:
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

/***/ 102:
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

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cds_cds__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(335);
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
        this.homePage = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.cdsPage = __WEBPACK_IMPORTED_MODULE_2__cds_cds__["a" /* CdsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="homePage" tabIcon="home"></ion-tab>\n  <ion-tab [root]="cdsPage" tabIcon="search"></ion-tab>\n  <ion-tab [root]="cdsPage" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="cdsPage" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleCdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cds_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_timeFormater__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleCdPage = /** @class */ (function () {
    function SingleCdPage(navParams, viewCtrl, cdsService, alertCtrl, timeFormater) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.cdsService = cdsService;
        this.alertCtrl = alertCtrl;
        this.timeFormater = timeFormater;
    }
    SingleCdPage.prototype.ngOnInit = function () {
        this.index = this.navParams.get("index");
        this.cd = this.cdsService.cdsList[this.index];
        this.duration = this.timeFormater.secondstotime(this.cd.duree);
    };
    SingleCdPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    SingleCdPage.prototype.onToggleAppareil = function () {
        var _this = this;
        var interval = this.dateDiff(this.time, __WEBPACK_IMPORTED_MODULE_3_moment__().toDate());
        if (!this.time || interval.sec > 3) {
            this.time = __WEBPACK_IMPORTED_MODULE_3_moment__().toDate();
            this.disabled = true;
            setTimeout(function () {
                _this.cd.isLended = !_this.cd.isLended;
                _this.lended = !_this.lended;
                _this.disabled = false;
            }, 3000);
        }
    };
    SingleCdPage.prototype.dateDiff = function (date1, date2) {
        var diff = {
            sec: 0,
            min: 0,
            hour: 0,
            day: 0,
        }; // Initialisation du retour
        var tmp = date2 - date1;
        tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60; // Extraction du nombre de secondes
        tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
        diff.min = tmp % 60; // Extraction du nombre de minutes
        tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
        diff.hour = tmp % 24; // Extraction du nombre d'heures
        tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
        diff.day = tmp;
        return diff;
    };
    SingleCdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-single-appareil",template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\cds\single-cd\single-cd.html"*/'<ion-header>\n  <ion-navbar color="customColor">\n    <ion-buttons>\n      <button ion-button clear (click)="dismissModal()">Fermer</button>\n    </ion-buttons>\n    <ion-title icon-start>{{cd.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card [ngClass]="{\'is-on\': !cd.isLended, \'is-off\' : cd.isLended}">\n    <ion-card-header>{{cd.name}}</ion-card-header>\n    <ion-card-content>\n      <p *ngFor="let line of cd.description">{{line}}</p>\n      <p>Durée : {{duration}}</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button\n          col-8\n          ion-button\n          full\n          [color]="!cd.isLended ? \'danger\': \'secondary\'"\n          (click)=" onToggleAppareil()"\n          [disabled]="disabled"\n        >\n          {{!cd.isLended ? "Louer" : "Rendre"}}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\cds\single-cd\single-cd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_cds_service__["a" /* CdsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__shared_timeFormater__["a" /* TimeFormater */]])
    ], SingleCdPage);
    return SingleCdPage;
}());

//# sourceMappingURL=single-cd.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_book_single_book__ = __webpack_require__(336);
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
            selector: "page-home",template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\home\home.html"*/'  <ion-header>\n  <ion-navbar color="customColor">\n    <div class="tamere">\n      <img src="../../assets/imgs/Logo2.png" height="40px"/>\n    </div>\n    <ion-buttons start >\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <button\n      ion-item\n      *ngFor="let place of placeList; let i = index"\n      (click)="onLoadLivre(i)"\n      icon-start\n    >\n    <page-single-place [place]="place"></page-single-place>\n\n    </button>\n</ion-content>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(413);
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
            selector: "page-single-appareil",template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\home\single-book\single-book.html"*/'<ion-header>\n  <ion-navbar style="background-image: url({{place.photo}})">\n    <ion-buttons>\n      <button ion-button clear (click)="dismissModal()"><ion-icon name="arrow-round-back"></ion-icon></button>\n    </ion-buttons>\n    <ion-title icon-start>{{place.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>{{place.name}}</ion-card-header>\n    <ion-card-content>\n      <p>Description : {{place.description}}</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button\n          col-8\n          ion-button\n          full\n        >\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\home\single-book\single-book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]])
    ], SingleBookPage);
    return SingleBookPage;
}());

//# sourceMappingURL=single-book.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cds_cds__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_single_book_single_book__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cds_single_cd_single_cd__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_cds_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_timeFormater__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_place_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_detail_place_detail_place__ = __webpack_require__(414);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cds_cds__["a" /* CdsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_single_book_single_book__["a" /* SingleBookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cds_single_cd_single_cd__["a" /* SingleCdPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_detail_place_detail_place__["a" /* DetailPlace */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_cds_cds__["a" /* CdsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_single_book_single_book__["a" /* SingleBookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cds_single_cd_single_cd__["a" /* SingleCdPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_detail_place_detail_place__["a" /* DetailPlace */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__shared_timeFormater__["a" /* TimeFormater */],
                __WEBPACK_IMPORTED_MODULE_11__services_cds_service__["a" /* CdsService */],
                __WEBPACK_IMPORTED_MODULE_13__services_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cds_cds__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(335);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.cdsPage = __WEBPACK_IMPORTED_MODULE_5__pages_cds_cds__["a" /* CdsPage */];
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\app\app.html"*/'<ion-menu side="right" [content]="myContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item icon-start (click)="onNavigate(rootPage)">\n        <ion-icon name="power">Accueil</ion-icon>\n      </button>\n      <button ion-item icon-start (click)="onNavigate(cdsPage)">\n        <ion-icon name="options">Recherche</ion-icon>\n      </button>\n      <button ion-item icon-start (click)="onNavigate(cdsPage)">\n        <ion-icon name="options">Favoris</ion-icon>\n      </button>\n      <button ion-item icon-start (click)="onNavigate(cdsPage)">\n        <ion-icon name="options">Communauté</ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="tabsPage" #myContent></ion-nav>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 200,
	"./af.js": 200,
	"./ar": 201,
	"./ar-dz": 202,
	"./ar-dz.js": 202,
	"./ar-kw": 203,
	"./ar-kw.js": 203,
	"./ar-ly": 204,
	"./ar-ly.js": 204,
	"./ar-ma": 205,
	"./ar-ma.js": 205,
	"./ar-sa": 206,
	"./ar-sa.js": 206,
	"./ar-tn": 207,
	"./ar-tn.js": 207,
	"./ar.js": 201,
	"./az": 208,
	"./az.js": 208,
	"./be": 209,
	"./be.js": 209,
	"./bg": 210,
	"./bg.js": 210,
	"./bm": 211,
	"./bm.js": 211,
	"./bn": 212,
	"./bn-bd": 213,
	"./bn-bd.js": 213,
	"./bn.js": 212,
	"./bo": 214,
	"./bo.js": 214,
	"./br": 215,
	"./br.js": 215,
	"./bs": 216,
	"./bs.js": 216,
	"./ca": 217,
	"./ca.js": 217,
	"./cs": 218,
	"./cs.js": 218,
	"./cv": 219,
	"./cv.js": 219,
	"./cy": 220,
	"./cy.js": 220,
	"./da": 221,
	"./da.js": 221,
	"./de": 222,
	"./de-at": 223,
	"./de-at.js": 223,
	"./de-ch": 224,
	"./de-ch.js": 224,
	"./de.js": 222,
	"./dv": 225,
	"./dv.js": 225,
	"./el": 226,
	"./el.js": 226,
	"./en-au": 227,
	"./en-au.js": 227,
	"./en-ca": 228,
	"./en-ca.js": 228,
	"./en-gb": 229,
	"./en-gb.js": 229,
	"./en-ie": 230,
	"./en-ie.js": 230,
	"./en-il": 231,
	"./en-il.js": 231,
	"./en-in": 232,
	"./en-in.js": 232,
	"./en-nz": 233,
	"./en-nz.js": 233,
	"./en-sg": 234,
	"./en-sg.js": 234,
	"./eo": 235,
	"./eo.js": 235,
	"./es": 236,
	"./es-do": 237,
	"./es-do.js": 237,
	"./es-mx": 238,
	"./es-mx.js": 238,
	"./es-us": 239,
	"./es-us.js": 239,
	"./es.js": 236,
	"./et": 240,
	"./et.js": 240,
	"./eu": 241,
	"./eu.js": 241,
	"./fa": 242,
	"./fa.js": 242,
	"./fi": 243,
	"./fi.js": 243,
	"./fil": 244,
	"./fil.js": 244,
	"./fo": 245,
	"./fo.js": 245,
	"./fr": 246,
	"./fr-ca": 247,
	"./fr-ca.js": 247,
	"./fr-ch": 248,
	"./fr-ch.js": 248,
	"./fr.js": 246,
	"./fy": 249,
	"./fy.js": 249,
	"./ga": 250,
	"./ga.js": 250,
	"./gd": 251,
	"./gd.js": 251,
	"./gl": 252,
	"./gl.js": 252,
	"./gom-deva": 253,
	"./gom-deva.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./gu": 255,
	"./gu.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it-ch": 264,
	"./it-ch.js": 264,
	"./it.js": 263,
	"./ja": 265,
	"./ja.js": 265,
	"./jv": 266,
	"./jv.js": 266,
	"./ka": 267,
	"./ka.js": 267,
	"./kk": 268,
	"./kk.js": 268,
	"./km": 269,
	"./km.js": 269,
	"./kn": 270,
	"./kn.js": 270,
	"./ko": 271,
	"./ko.js": 271,
	"./ku": 272,
	"./ku.js": 272,
	"./ky": 273,
	"./ky.js": 273,
	"./lb": 274,
	"./lb.js": 274,
	"./lo": 275,
	"./lo.js": 275,
	"./lt": 276,
	"./lt.js": 276,
	"./lv": 277,
	"./lv.js": 277,
	"./me": 278,
	"./me.js": 278,
	"./mi": 279,
	"./mi.js": 279,
	"./mk": 280,
	"./mk.js": 280,
	"./ml": 281,
	"./ml.js": 281,
	"./mn": 282,
	"./mn.js": 282,
	"./mr": 283,
	"./mr.js": 283,
	"./ms": 284,
	"./ms-my": 285,
	"./ms-my.js": 285,
	"./ms.js": 284,
	"./mt": 286,
	"./mt.js": 286,
	"./my": 287,
	"./my.js": 287,
	"./nb": 288,
	"./nb.js": 288,
	"./ne": 289,
	"./ne.js": 289,
	"./nl": 290,
	"./nl-be": 291,
	"./nl-be.js": 291,
	"./nl.js": 290,
	"./nn": 292,
	"./nn.js": 292,
	"./oc-lnc": 293,
	"./oc-lnc.js": 293,
	"./pa-in": 294,
	"./pa-in.js": 294,
	"./pl": 295,
	"./pl.js": 295,
	"./pt": 296,
	"./pt-br": 297,
	"./pt-br.js": 297,
	"./pt.js": 296,
	"./ro": 298,
	"./ro.js": 298,
	"./ru": 299,
	"./ru.js": 299,
	"./sd": 300,
	"./sd.js": 300,
	"./se": 301,
	"./se.js": 301,
	"./si": 302,
	"./si.js": 302,
	"./sk": 303,
	"./sk.js": 303,
	"./sl": 304,
	"./sl.js": 304,
	"./sq": 305,
	"./sq.js": 305,
	"./sr": 306,
	"./sr-cyrl": 307,
	"./sr-cyrl.js": 307,
	"./sr.js": 306,
	"./ss": 308,
	"./ss.js": 308,
	"./sv": 309,
	"./sv.js": 309,
	"./sw": 310,
	"./sw.js": 310,
	"./ta": 311,
	"./ta.js": 311,
	"./te": 312,
	"./te.js": 312,
	"./tet": 313,
	"./tet.js": 313,
	"./tg": 314,
	"./tg.js": 314,
	"./th": 315,
	"./th.js": 315,
	"./tk": 316,
	"./tk.js": 316,
	"./tl-ph": 317,
	"./tl-ph.js": 317,
	"./tlh": 318,
	"./tlh.js": 318,
	"./tr": 319,
	"./tr.js": 319,
	"./tzl": 320,
	"./tzl.js": 320,
	"./tzm": 321,
	"./tzm-latn": 322,
	"./tzm-latn.js": 322,
	"./tzm.js": 321,
	"./ug-cn": 323,
	"./ug-cn.js": 323,
	"./uk": 324,
	"./uk.js": 324,
	"./ur": 325,
	"./ur.js": 325,
	"./uz": 326,
	"./uz-latn": 327,
	"./uz-latn.js": 327,
	"./uz.js": 326,
	"./vi": 328,
	"./vi.js": 328,
	"./x-pseudo": 329,
	"./x-pseudo.js": 329,
	"./yo": 330,
	"./yo.js": 330,
	"./zh-cn": 331,
	"./zh-cn.js": 331,
	"./zh-hk": 332,
	"./zh-hk.js": 332,
	"./zh-mo": 333,
	"./zh-mo.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 412;

/***/ }),

/***/ 413:
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

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPlace; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Place__ = __webpack_require__(415);
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
            selector: "page-single-place",template:/*ion-inline-start:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\home\detail-place\detail-place.html"*/'\n <div class="container">\n  <ion-img [src]="place.photo"></ion-img>\n  <ion-card>\n    <div>\n    <ion-card-header>{{place.name}}</ion-card-header>\n    <ion-icon name="arrow-dropright-circle"></ion-icon>\n  </div>\n    <ion-card-content>\n      <p>Description : {{place.description}}</p>\n    </ion-card-content>\n  </ion-card>\n</div>\n'/*ion-inline-end:"D:\MyDigitalSchool\MyDigitalProject\test-appli\src\pages\home\detail-place\detail-place.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], DetailPlace);
    return DetailPlace;
}());

//# sourceMappingURL=detail-place.js.map

/***/ }),

/***/ 415:
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

/***/ })

},[337]);
//# sourceMappingURL=main.js.map