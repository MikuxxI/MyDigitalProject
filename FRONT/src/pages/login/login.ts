import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { User } from "../../models/User";
import { UserService } from "../../services/login.service";
import { TabsPage } from "../tabs/tabs";

@Component({
  selector: "page-login",
  templateUrl: "login.html",
})

export class LoginPage {
  public connected = false;
  public login = true;
  public users: User[];
  email: string;
  mdp: string;

  tabsPage: any = TabsPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _userService: UserService
  ) { }

  ionViewWillEnter() {
    this.users = this._userService.users.slice();
  }

  connexion() {
    this.connected = true;
  }

  setEmail(value) {
    this.email = value;
  }

  setMdp(value) {
    this.mdp = value;
  }

  isAnInscription() {
    this.login = false;
  }

  isAlreadyUser() {
    this.login = true;
  }
}
