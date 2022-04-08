import { Component, OnInit } from "@angular/core";
import { AlertController, NavParams, ViewController } from "ionic-angular";
import { Livre } from "../../../models/Livre";
import { CdsService } from "../../../services/cds.service";
import * as moment from "moment";
import { Cd } from "../../../models/Cd";
import { TimeFormater } from "../../../shared/timeFormater";

@Component({
  selector: "page-single-appareil",
  templateUrl: "single-cd.html",
})
export class SingleCdPage implements OnInit {
  index: number;
  cd: Cd;
  time: Date;
  disabled: Boolean;
  lended: Boolean;
  duration: String;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private cdsService: CdsService,
    private alertCtrl: AlertController,
    private timeFormater: TimeFormater
  ) {}

  ngOnInit() {
    this.index = this.navParams.get("index");
    this.cd = this.cdsService.cdsList[this.index];
    this.duration = this.timeFormater.secondstotime(this.cd.duree);
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    let interval = this.dateDiff(this.time, moment().toDate());
    if (!this.time || interval.sec > 3) {
      this.time = moment().toDate();
      this.disabled = true;
      setTimeout(() => {
        this.cd.isLended = !this.cd.isLended;
        this.lended = !this.lended;
        this.disabled = false;
      }, 3000);
    }
  }

  dateDiff(date1, date2) {
    var diff = {
      sec: 0,
      min: 0,
      hour: 0,
      day: 0,
    }; // Initialisation du retour
    var tmp = date2 - date1;

    tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60; // Extraction du nombre de secondes

    tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
    diff.min = tmp % 60; // Extraction du nombre de minutes

    tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
    diff.hour = tmp % 24; // Extraction du nombre d'heures

    tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
    diff.day = tmp;

    return diff;
  }
}
