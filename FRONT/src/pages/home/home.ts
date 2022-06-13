import { Component } from "@angular/core";
import { MenuController } from "ionic-angular";
import { Categorie } from "../../models/Categorie";
import { Place } from "../../models/Place";
import { CategorieService } from "../../services/categories.service";
import { PlaceService } from "../../services/place.service";

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
    private placeService: PlaceService,
    private categorieService: CategorieService,
    private menuCtrl: MenuController
  ) {}

  ionViewWillEnter() {
    this.placeList = this.placeService.placeList.slice();
    this.discovery = this.placeList[0];
    this.categories = this.categorieService.categorieList.slice();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  refreshFilter() {
    this.placeList = this.placeService.placeList.filter(
      (place) => place.categorie.name === this.categorieSelected.name
    );
  }

  test(categorieId:number){
    console.log(categorieId);
    this.categorieSelected = this.categories[categorieId];
  }
}
