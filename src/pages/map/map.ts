import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,AlertController, Platform } from 'ionic-angular';
import {Http} from "@angular/http";
import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from
  'angular2-google-maps/core';

declare var google;

@Component({
  selector: 'map',
  templateUrl: 'map.html',
  styles: ['.sebm-google-map-container {height: 100%;}']
})
export class Map {

  lat: number = 35.3089;
  lng: number = -83.1844;
  forest;
  @ViewChild('map') mapElement: ElementRef;
      map: any;

  constructor(public navCtrl: NavController, public platform: Platform, private http:Http,) {
    http.get('http://adriandunham.com/treesFULL.json')
      .subscribe(res => this.forest = res.json());
  }


  // showAlert(latitude, longitude) {
  //   let alert = this.alertCtrl.create({
  //     title: 'Location!',
  //     subTitle: 'Latitude: ' + latitude + 'Longitude: ' + longitude,
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

}
