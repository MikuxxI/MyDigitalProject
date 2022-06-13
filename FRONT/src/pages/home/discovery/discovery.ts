import { Component, Input } from "@angular/core";
import { ViewController } from "ionic-angular";
import { Place } from "../../../models/Place";

@Component({
  selector: "discovery",
  templateUrl: "discovery.html",
})
export class Discovery {
  @Input()
  public place: Place;
  public bg: String;

  constructor(private viewCtrl: ViewController) {
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
}
