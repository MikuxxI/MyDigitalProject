import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { CdsPage } from "../pages/cds/cds";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { SingleBookPage } from "../pages/home/single-book/single-book";
import { SingleCdPage } from "../pages/cds/single-cd/single-cd";
import { CdsService } from "../services/cds.service";
import { TimeFormater } from "../shared/timeFormater";
import { PlaceService } from "../services/place.service";
import { DetailPlace } from "../pages/home/detail-place/detail-place";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CdsPage,
    HomePage,
    SingleBookPage,
    SingleCdPage,
    DetailPlace
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CdsPage,
    HomePage,
    SingleBookPage,
    SingleCdPage,
    DetailPlace
  ],
  providers: [
    TimeFormater,
    CdsService,
    PlaceService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
