import {Component, PipeTransform, Injectable, Pipe, AfterViewChecked, ViewChild} from '@angular/core';
import {Nav, NavController, LoadingController} from 'ionic-angular';
import {ApiService} from '../../services';
import {singleTree} from '../singleTree/singleTree';

@Component({
  selector: 'trees',
  templateUrl: 'trees.html',
    providers:[ApiService]
})
export class Trees implements AfterViewChecked{

  @ViewChild(Nav) nav: Nav;

    forest;

  constructor(public navCtrl: NavController, public treeService: ApiService, public loadingCtrl: LoadingController) {


  }

  ngAfterViewChecked(){

  }


  ngOnInit(){
    this.treeService.getForest().subscribe(data => this.forest = data);
    console.log(this.forest)
  }

  setTreeArray(){
    console.log("In setTreeArray");
  }

  openSingleTree(characterNum) {

    console.log(this.forest[characterNum]);
    this.navCtrl.push(singleTree, {
      tree: this.forest[characterNum]
    });
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
