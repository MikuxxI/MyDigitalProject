import { Component, ViewChild, ElementRef } from "@angular/core";
import { Place } from "../../models/Place";
import { PlaceService } from "../../services/place.service";

declare var google: any;

@Component({
  selector: "page-search",
  templateUrl: "search.html",
})
export class SearchPage {

  map: any;

  @ViewChild('map', { read: ElementRef }) mapRef: ElementRef;

  infoWindows: any = [];

  markers: Place[];

  constructor(
    private placeService: PlaceService
  ) {
    this.markers = this.placeService.placeList.slice();
  }

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.name,
        latitude: marker.latitude,
        longitude: marker.longitude,
        description: marker.description,
        adresse: marker.adresse,
        ville: marker.ville,
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowsToMarker(mapMarker);

    }
  }

  addInfoWindowsToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
      '<h2 id="firstHeading" class="firstHeading"> ' + marker.title + '</h2>' +
      '<p> Description: ' + marker.description + '</p>' +
      '<p> Adresse: ' + marker.adresse + '</p>' +
      '<p> Ville: ' + marker.ville + '</p>' +
      '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });

    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(48.04824950710329, -1.7424002227858937);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarkersToMap(this.markers);
  }
}
