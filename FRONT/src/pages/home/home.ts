import { Component } from "@angular/core";
import { MenuController } from "ionic-angular";
import { ModalController } from "ionic-angular";
import { Observable } from "rxjs";
import { Categorie } from "../../models/Categorie";
import { Place } from "../../models/Place";
import { CategorieService } from "../../services/categories.service";
import { PlaceService } from "../../services/place.service";
import { SingleBookPage } from "./single-book/single-book";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  placeList: Place[];
  discovery: Place;
  categories: Categorie[];
  categorieSelected: Categorie;

  constructor(
    private modalCtrl: ModalController,
    private placeService: PlaceService,
    private categorieService: CategorieService,
    private menuCtrl: MenuController
  ) {}

  ionViewWillEnter() {
    this.placeList = this.placeService.placeList.slice();
    this.discovery = this.placeList[0];
    this.categories = this.categorieService.categorieList.slice();
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

  refreshFilter() {
    this.placeList = this.placeService.placeList.filter(
      (place) => place.categorie.name === this.categorieSelected.name
    );
  }
}
