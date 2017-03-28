import { Component, ViewChild, ElementRef } from '@angular/core';
import {NavController, Platform, ModalController} from 'ionic-angular';
import {Http} from "@angular/http";
import {TreeModal} from '../../components/'
import { Geolocation } from '@ionic-native/geolocation';

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

  constructor(public navCtrl: NavController, public platform: Platform, private http:Http,public modalCtrl: ModalController, private geolocation: Geolocation) {
    http.get('http://adriandunham.com/treesFULL.json')
      .subscribe(res => this.forest = res.json());


    this.getLocation()
  }

  getLocation(){
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   this.lat = resp.coords.latitude;
    //   this.lng = resp.coords.longitude;
    //   console.log(this.lat, this.lng)
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.lat = data.coords.latitude
      this.lng = data.coords.longitude
      console.log(data.coords)
    });
  }

}
