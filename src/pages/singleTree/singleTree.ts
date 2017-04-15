import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'singleTree',
  templateUrl: 'singleTree.html'
})
export class singleTree {

  tree;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tree = this.navParams.get('tree');
    console.log(this.tree)
  }

  dismiss(){
    this.navCtrl.pop()
  }
}
