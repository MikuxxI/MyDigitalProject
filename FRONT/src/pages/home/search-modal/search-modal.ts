import { Component, OnInit } from "@angular/core";
import { NavParams, ViewController } from "ionic-angular";
import { Place } from "../../../models/Place";
import { PlaceService } from "../../../services/place.service";

@Component({
  selector: "search-modal",
  templateUrl: "search-modal.html",
})
export class SearchModalPage implements OnInit {
  index: number;
  place: Place;
  description: string;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private placeService: PlaceService,
  ) {}

  ngOnInit() {
    this.index = this.navParams.get("index");
    this.place = this.placeService.placeList[this.index];
    this.description = this.place.description;
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
