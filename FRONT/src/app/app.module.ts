import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { SingleBookPage } from "../pages/home/single-book/single-book";
import { CdsService } from "../services/cds.service";
import { TimeFormater } from "../shared/timeFormater";
import { PlaceService } from "../services/place.service";
import { DetailPlace } from "../pages/home/detail-place/detail-place";
import { Discovery } from "../pages/home/discovery/discovery";
import { CategorieService } from "../services/categories.service";
import { SearchPage } from "../pages/search/search";
import { LoginPage } from "../pages/login/login";
import { UserService } from "../services/login.service";
import { FavoryPage } from "../pages/favory/favory";
import { CommunityPage } from "../pages/community/community";
//import { GeolocationService } from "../services/geolocation.service";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    SingleBookPage,
    Discovery,
    DetailPlace,
    SearchPage,
    FavoryPage,
    CommunityPage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    SingleBookPage,
    Discovery,
    DetailPlace,
    SearchPage,
    FavoryPage,
    CommunityPage,
  ],
  providers: [
    TimeFormater,
    CdsService,
    CategorieService,
    PlaceService,
    UserService,
    StatusBar,
    SplashScreen,
    //GeolocationService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
