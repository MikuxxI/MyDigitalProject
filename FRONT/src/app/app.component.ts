import { Component, ViewChild } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { TabsPage } from "../pages/tabs/tabs";
import { NavController } from "ionic-angular";
import { MenuController } from "ionic-angular";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  rootPage:any = LoginPage;
  homePage:any = HomePage;
  tabsPage: any = TabsPage;

  @ViewChild("myContent") content: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }

  disconnect(){
    this.content.setRoot(this.rootPage);
    this.menuCtrl.close();
  }
}
