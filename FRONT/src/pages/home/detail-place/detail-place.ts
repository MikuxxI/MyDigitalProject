import { Component, Input, OnInit } from "@angular/core";
import { AlertController, NavParams, ViewController } from "ionic-angular";
import * as moment from "moment";
import { Time } from "@angular/common";
import { TimeFormater } from "../../../shared/timeFormater";
import { Place } from "../../../models/Place";
import { PlaceService } from "../../../services/place.service";

@Component({
  selector: "page-single-place",
  templateUrl: "detail-place.html",
})
export class DetailPlace{

  @Input()
  public place: Place;

  constructor(
    private viewCtrl: ViewController
  ) {}

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
