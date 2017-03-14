import {Component, ElementRef, ViewChild, Input} from '@angular/core';
import {ModalController, Platform, NavParams, ViewController, NavController} from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, CameraPosition, GoogleMapsMarkerOptions, GoogleMapsMarker} from 'ionic-native';

import { TreeModal } from './../tree-modal'

declare var google;

@Component({
  selector: 'map-component',
  templateUrl: 'map-component.html'
})
export class MapComponent {

  // @Input() tree: TreeModal;

  lat = 35.302881;
  long = -83.182504;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public platform: Platform) {
    platform.ready().then(() => {
      this.loadMap();
    });
  }


  loadMap(){

    let latLng = new google.maps.LatLng(this.lat, this.long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  addMarker(){

    let latLong = new google.maps.LatLng(this.lat, this.long);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLong
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }
}
