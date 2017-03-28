import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { MyApp } from './app.component';
import {Page1, Page2, Home, Trees, Map, startPage} from '../pages';
import {ReadMore, TreeItem, TreeModal, LocalStorage, MapComponent} from '../components';
import {ApiService} from '../services';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Home,
    ReadMore,
    Trees,
    TreeItem,
    Map,
    TreeModal,
    startPage,
    MapComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNU1fkrZ7RyK7Lqso5emwZ0dAplVrC9l4'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Home,
    ReadMore,
    Trees,
    TreeItem,
    Map,
    TreeModal,
    startPage,
    MapComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ApiService, LocalStorage, Storage, Geolocation]
})
export class AppModule {}
