import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homePage: any = HomePage;
  searchPage:any = SearchPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
