import { Component, ViewChild, ElementRef } from '@angular/core';
import {NavController, Platform, ModalController} from 'ionic-angular';
import {Http} from "@angular/http";
import {TreeModal} from '../../components/'

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

  constructor(public navCtrl: NavController, public platform: Platform, private http:Http,public modalCtrl: ModalController) {
    http.get('http://adriandunham.com/treesFULL.json')
      .subscribe(res => this.forest = res.json());
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(TreeModal, {tree: this.forest[characterNum]});
    // console.log(characterNum);
    modal.present();
  }

}
