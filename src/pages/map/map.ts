import { Component, ViewChild, ElementRef } from '@angular/core';
import {NavController, Platform, ModalController} from 'ionic-angular';
import {Http} from "@angular/http";
import {ApiService} from '../../services';
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
  zoom: number = 16;
  radius: number = 100;
  forest;
  @ViewChild('map') mapElement: ElementRef;
      map: any;

  constructor(private geolocation: Geolocation, public treeService: ApiService,) {
    // http.get('../assets/treesFULL.json')
    //   .subscribe(res => this.forest = res.json());


    this.getLocation();
    this.getForest();
  }

  getForest(){
    this.treeService.getForest().subscribe(data => this.forest = data);
    console.log(this.forest)
  }

  getLocation(){
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.lat = data.coords.latitude;
      this.lng = data.coords.longitude;
      console.log(this.zoom);
      console.log(data.coords)
    });
  }

}
