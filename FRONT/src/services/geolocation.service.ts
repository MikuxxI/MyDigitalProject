import { Geolocation } from "@awesome-cordova-plugins/geolocation/ngx";
export class GeolocationService {
  public position: any;

  constructor(public geolocation: Geolocation) {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        (this.position.latitude = resp.coords.latitude),
          (this.position.longitude = resp.coords.longitude);
      })
      .catch((error) => {
        console.log("Error getting location", error);
      });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }

  getGeolocation() {
    return this.position;
  }
}
