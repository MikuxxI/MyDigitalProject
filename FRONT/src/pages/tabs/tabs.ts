import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CdsPage } from '../cds/cds';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage: any = HomePage;
  cdsPage: any = CdsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
