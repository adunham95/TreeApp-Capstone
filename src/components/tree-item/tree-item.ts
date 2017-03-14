import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, CameraPosition, GoogleMapsMarkerOptions, GoogleMapsMarker} from 'ionic-native';


@Component({
  selector: 'tree-item',
  templateUrl: 'tree-item.html'
})
export class TreeItem {

    constructor(public modalCtrl: ModalController) {
    }

    // presentModal() {
    //     let modal = this.modalCtrl.create(TreeModal);
    //     modal.present();
    // }

    // Load map only after view is initialize
    // ngAfterViewInit() {
    //     this.loadMap();
    // }
    //
    // loadMap() {
    //     // make sure to create following structure in your view.html file
    //     // and add a height (for example 100%) to it, else the map won't be visible
    //     // <ion-content>
    //     //  <div #map id="map" style="height:100%;"></div>
    //     // </ion-content>
    //
    //     // create a new map by passing HTMLElement
    //     let element: HTMLElement = document.getElementById('map');
    //
    //     let map = new GoogleMap(element);
    //
    //     // listen to MAP_READY event
    //     map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));
    //
    //     // create LatLng object
    //     let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904, -89.3809802);
    //
    //     // create CameraPosition
    //     let position: CameraPosition = {
    //         target: ionic,
    //         zoom: 18,
    //         tilt: 30
    //     };
    // }

}
