import { Component } from "@angular/core";
import { MenuController } from "ionic-angular";
import { ModalController } from "ionic-angular";
import { Cd } from "../../models/Cd";
import { CdsService } from "../../services/cds.service";
import { SingleCdPage } from "./single-cd/single-cd";


@Component({
  selector: "page-books",
  templateUrl: "cds.html",
})
export class CdsPage {
  cdsList: Cd[];

  constructor(
    private modalCtrl: ModalController,
    private cdService: CdsService,
    private menuCtrl: MenuController
  ) {}

  ionViewWillEnter() {
    this.cdsList = this.cdService.cdsList.slice();
  }

  onLoadLivre(index: number) {
    let modal = this.modalCtrl.create(SingleCdPage, {
      index: index,
    });
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
