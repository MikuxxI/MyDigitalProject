import { Component, Input, OnInit } from "@angular/core";
import { AlertController, NavParams, ViewController } from "ionic-angular";
import * as moment from "moment";
import { Time } from "@angular/common";
import { TimeFormater } from "../../../shared/timeFormater";
import { Place } from "../../../models/Place";
import { PlaceService } from "../../../services/place.service";

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
