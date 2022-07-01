import { Component } from "@angular/core";
import { MenuController } from "ionic-angular";

@Component({
  selector: "page-favory",
  templateUrl: "favory.html",
})
export class FavoryPage {
  constructor(private menuCtrl: MenuController) {}

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
