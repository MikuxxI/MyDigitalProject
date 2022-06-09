import { Component, Input } from "@angular/core";
import { ModalController,ViewController } from "ionic-angular";
import { Place } from "../../../models/Place";
import { SingleBookPage } from "../single-book/single-book";

@Component({
  selector: "page-single-place",
  templateUrl: "detail-place.html",
})
export class DetailPlace {

  @Input()
  public place: Place;

  @Input()
  public index: number;

  public icone: string;

  public isLiked: boolean;

  constructor(
    private modalCtrl: ModalController,
    private viewCtrl: ViewController
  ) {

    this.icone = "heart-outline";
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  like() {
    this.isLiked = !this.isLiked;
    this.isLiked ? this.icone = "heart" : this.icone = "heart-outline";
  }

  onLoadLivre(index: number) {
    let modal = this.modalCtrl.create(SingleBookPage, {
      index: index,
    });
    modal.present();
  }


}
