import {Component, OnInit, PipeTransform, Injectable, Pipe, AfterViewChecked} from '@angular/core';
import {NavController, ModalController, NavParams, Platform, ViewController, LoadingController} from 'ionic-angular';
import {ApiService} from '../../services';
import {TreeModal} from '../../components/'
import {Http} from "@angular/http";


@Component({
  selector: 'trees',
  templateUrl: 'trees.html',
    providers:[ApiService]
})
export class Trees implements AfterViewChecked{

    forest;
    forestSpecies;

    forestTest;

    // forest = [
    //     { "Tree_ID":1, "UTM_zone":"17S", "Easting":301313.12, "Northing":3909461.17, "Species_scientific":"Quercus alba", "Species_common":"White oak", "Spp_code":"QUAL", "Lat": 35.308635, "Long": -83.185412},
    //     { "Tree_ID":2, "UTM_zone":"17S", "Easting":301517.08, "Northing":3909411.69, "Species_scientific":"Quercus velutina", "Species_common":"Black oak", "Spp_code":"QUVE", "Lat": 35.30823, "Long": -83.183158},
    //     { "Tree_ID":3, "UTM_zone":"17S", "Easting":301641.78, "Northing":3909552.36, "Species_scientific":"Quercus coccinea", "Species_common":"Scarlet oak", "Spp_code":"QUCO", "Lat": 35.309522, "Long": -83.181822},
    //     { "Tree_ID":4, "UTM_zone":"17S", "Easting":301470.86, "Northing":3909601.75, "Species_scientific":"Pinus strobus", "Species_common":"Eastern white pine", "Spp_code":"PIST", "Lat": 35.309933, "Long": -83.183713},
    //     { "Tree_ID":5, "UTM_zone":"17S", "Easting":301849.41, "Northing":3909859.39, "Species_scientific":"Taxodium distichum", "Species_common":"Bald cypress", "Spp_code":"TADI", "Lat": 35.31233, "Long": -83.179614},
    //     { "Tree_ID":6, "UTM_zone":"17S", "Easting":301401.55, "Northing":3910014.47, "Species_scientific":"Liriodendron tulipifera", "Species_common":"Yellow poplar", "Spp_code":"LITU", "Lat": 35.313638, "Long": -83.184574},
    //     { "Tree_ID":7, "UTM_zone":"17S", "Easting":301300.57, "Northing":3909651.92, "Species_scientific":"Platanus occidentalis", "Species_common":"American sycamore", "Spp_code":"PLOC", "Lat": 35.310351, "Long": -83.185597},
    //     { "Tree_ID":8, "UTM_zone":"17S", "Easting":301073.19, "Northing":3910356.28, "Species_scientific":"Acer rubrum", "Species_common":"Red maple", "Spp_code":"ACRU", "Lat": 35.316653, "Long": -83.188267},
    //     { "Tree_ID":9, "UTM_zone":"17S", "Easting":301594.87, "Northing":3908804.23, "Species_scientific":"Tsuga canadensis", "Species_common":"Eastern hemlock", "Spp_code":"TSCA", "Lat": 35.302772, "Long": -83.182156},
    //     { "Tree_ID":10, "UTM_zone":"17S", "Easting":301417.31, "Northing":3909232.82, "Species_scientific":"Cornus florida", "Species_common":"Flowering dogwood", "Spp_code":"COFL", "Lat": 35.306598, "Long": -83.184212}
    // ]

  constructor(public navCtrl: NavController, public treeService: ApiService, public modalCtrl: ModalController, private http:Http, public loadingCtrl: LoadingController) {

      http.get('http://adriandunham.com/treesFULL.json')
          .subscribe(res => this.forest = res.json());

      // http.get('http://adriandunham.com/treesFULL.json')
      //   .subscribe(res => this.forestTest = res.json().Species_scientific);

      // this.setTreeArray();

      // this.forest = this.treeService.getForest();
    // console.log(this.forest)

  }

  ngAfterViewChecked(){

    // console.log("Forest Species: " + this.forestSpecies);
    // console.log("Forest: " + this.forest);
    // console.log("ForestTest: " + this.forestTest);
  }

  setTreeArray(){
    console.log("In setTreeArray");
    // this.forestSpecies = this.forestTest.map(function (x) {
    //   return x.Species_scientific
    // });

    // console.log("Forest Species: " + this.forestSpecies);
    // console.log("Forest: " + this.forest);
    // console.log("ForestTest: " + this.forestTest);

  }

  openModal(characterNum) {

        let modal = this.modalCtrl.create(TreeModal, {tree: this.forest[characterNum]});
        // console.log(characterNum);
        modal.present();
    }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  // ngOnInit(){
  //     this.treeService.getForest()
  // }

}

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field : string, value : string): any[] {
        if (!items) return [];
        return items.filter(it => it[field] == value);
    }
}
