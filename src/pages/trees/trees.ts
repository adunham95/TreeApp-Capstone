import {Component, PipeTransform, Injectable, Pipe, AfterViewChecked, ViewChild} from '@angular/core';
import {Nav, NavController, ModalController, LoadingController} from 'ionic-angular';
import {ApiService} from '../../services';
import {singleTree} from '../singleTree/singleTree';
import {Http} from "@angular/http";


@Component({
  selector: 'trees',
  templateUrl: 'trees.html',
    providers:[ApiService]
})
export class Trees implements AfterViewChecked{

  @ViewChild(Nav) nav: Nav;

    forest;

  constructor(public navCtrl: NavController, public treeService: ApiService, public modalCtrl: ModalController, private http:Http, public loadingCtrl: LoadingController) {

      http.get('../assets/treesFULL.json')
          .subscribe(res => this.forest = res.json());

  }

  ngAfterViewChecked(){

  }

  setTreeArray(){
    console.log("In setTreeArray");
  }

  openSingleTree(characterNum) {

    // console.log(characterNum);
    this.nav.setRoot(singleTree);
    }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

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
