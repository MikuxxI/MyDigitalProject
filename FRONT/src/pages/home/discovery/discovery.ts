import { Component, Input } from "@angular/core";
import { ModalController, ViewController } from "ionic-angular";
import { Place } from "../../../models/Place";
import { SingleBookPage } from "../single-book/single-book";

@Component({
  selector: "discovery",
  templateUrl: "discovery.html",
})
export class Discovery {
  @Input()
  public place: Place;
  public bg: String;

  constructor(private viewCtrl: ViewController,
    private modalCtrl: ModalController) {
    if (this.place) {
      this.bg = this.place.photo;
    }
  }

  ionViewDidEnter() {
    debugger;
    if (this.place) {
      this.bg = this.place.photo;
    }
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }


  onLoadLivre() {
    let modal = this.modalCtrl.create(SingleBookPage, {
      index: 0,
    });
    modal.present();
  }
}
