import { Component, ViewChild, ElementRef } from "@angular/core";

declare var google: any;

@Component({
  selector: "page-search",
  templateUrl: "search.html",
})
export class SearchPage {

  map: any;

  @ViewChild('map', { read: ElementRef }) mapRef: ElementRef;

  infoWindows: any = [];

  markers: any = [
    {
      title: "MyDigitalSchool Rennes",
      latitude: "48.048372840470805",
      longitude: "-1.7424267908073365"
    }
  ]

  constructor(
  ) { }

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      });

      mapMarker.setMap(this.map);
      this.addInfoWindowsToMarker(mapMarker);

    }
  }

  addInfoWindowsToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
      '<h2 id="firstHeading" class="firstHeading"> ' + marker.title + '</h2>' +
      '<p> Latitude:' + marker.latitude + '</p>' +
      '<p> Longitude:' + marker.longitude + '</p>' +
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
