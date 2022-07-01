import { Component } from "@angular/core";
import { MenuController } from "ionic-angular";

@Component({
  selector: "page-community",
  templateUrl: "community.html",
})
export class CommunityPage {
  constructor(private menuCtrl: MenuController) {}

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
