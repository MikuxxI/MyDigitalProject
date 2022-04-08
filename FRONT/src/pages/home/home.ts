import { Component } from "@angular/core";
import { MenuController } from "ionic-angular";
import { ModalController } from "ionic-angular";
import { Place } from "../../models/Place";
import { PlaceService } from "../../services/place.service";
import { SingleBookPage } from "./single-book/single-book";


@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  placeList: Place[];

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService,
    private menuCtrl: MenuController
  ) {}

  ionViewWillEnter() {
    this.placeList = this.placeService.placeList.slice();
  }

  onLoadLivre(index: number) {
    let modal = this.modalCtrl.create(SingleBookPage, {
      index: index,
    });
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
