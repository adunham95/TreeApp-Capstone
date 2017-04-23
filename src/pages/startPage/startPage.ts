import {Component, ViewChild} from '@angular/core';
import {Http} from '@angular/http';

import {NavController, NavParams, Slides, Nav, Platform} from 'ionic-angular';
import {Home} from "../index";


@Component({
  selector: 'start-page',
  templateUrl: 'startPage.html'
})
export class startPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  firstRun;

  constructor(
    platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
  )
  {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }

  @ViewChild(Slides) slides: Slides;
  @ViewChild(Nav) nav: Nav;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  goHome(){
    this.navCtrl.setRoot(Home);
  }

}
