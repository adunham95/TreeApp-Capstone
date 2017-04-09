import {Component, ElementRef, ViewChild} from '@angular/core';
import {Platform, NavParams, ViewController} from 'ionic-angular';
import {Http} from "@angular/http";

declare var google;

@Component({
    templateUrl: 'tree-modal.html',
  styles: ['.sebm-google-map-container {height: 200px;}']
})
export class TreeModal {
    tree;
    treeNum: string;
    // forest;
    forest = [
        { "Tree_ID":1, "UTM_zone":"17S", "Easting":301313.12, "Northing":3909461.17, "Species_scientific":"Quercus alba", "Species_common":"White oak", "Spp_code":"QUAL", "Lat": 35.308635, "Long": -83.185412},
        { "Tree_ID":2, "UTM_zone":"17S", "Easting":301517.08, "Northing":3909411.69, "Species_scientific":"Quercus velutina", "Species_common":"Black oak", "Spp_code":"QUVE", "Lat": 35.30823, "Long": -83.183158},
        { "Tree_ID":3, "UTM_zone":"17S", "Easting":301641.78, "Northing":3909552.36, "Species_scientific":"Quercus coccinea", "Species_common":"Scarlet oak", "Spp_code":"QUCO", "Lat": 35.309522, "Long": -83.181822},
        { "Tree_ID":4, "UTM_zone":"17S", "Easting":301470.86, "Northing":3909601.75, "Species_scientific":"Pinus strobus", "Species_common":"Eastern white pine", "Spp_code":"PIST", "Lat": 35.309933, "Long": -83.183713},
        { "Tree_ID":5, "UTM_zone":"17S", "Easting":301849.41, "Northing":3909859.39, "Species_scientific":"Taxodium distichum", "Species_common":"Bald cypress", "Spp_code":"TADI", "Lat": 35.31233, "Long": -83.179614},
        { "Tree_ID":6, "UTM_zone":"17S", "Easting":301401.55, "Northing":3910014.47, "Species_scientific":"Liriodendron tulipifera", "Species_common":"Yellow poplar", "Spp_code":"LITU", "Lat": 35.313638, "Long": -83.184574},
        { "Tree_ID":7, "UTM_zone":"17S", "Easting":301300.57, "Northing":3909651.92, "Species_scientific":"Platanus occidentalis", "Species_common":"American sycamore", "Spp_code":"PLOC", "Lat": 35.310351, "Long": -83.185597},
        { "Tree_ID":8, "UTM_zone":"17S", "Easting":301073.19, "Northing":3910356.28, "Species_scientific":"Acer rubrum", "Species_common":"Red maple", "Spp_code":"ACRU", "Lat": 35.316653, "Long": -83.188267},
        { "Tree_ID":9, "UTM_zone":"17S", "Easting":301594.87, "Northing":3908804.23, "Species_scientific":"Tsuga canadensis", "Species_common":"Eastern hemlock", "Spp_code":"TSCA", "Lat": 35.302772, "Long": -83.182156},
        { "Tree_ID":10, "UTM_zone":"17S", "Easting":301417.31, "Northing":3909232.82, "Species_scientific":"Cornus florida", "Species_common":"Flowering dogwood", "Spp_code":"COFL", "Lat": 35.306598, "Long": -83.184212}
    ];
    about = null;

  lat = 35.302881;
  long = -83.182504;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        private http:Http,
  ){
        this.tree = params.get('tree');
        console.log('ID', this.tree);
  }

  dismiss() {
        this.viewCtrl.dismiss();
  }

  showMore(index, lat, long) {
          this.lat = lat;
          this.long = long;
      console.log("index = " + index);
      if(this.about == null){
            this.about =  index
      }
      else{
            this.about = null
      }
  }
}
