import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'tree-item',
  templateUrl: 'tree-item.html'
})
export class TreeItem {

    constructor(public modalCtrl: ModalController) {
    }

}
