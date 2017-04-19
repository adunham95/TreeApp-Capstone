import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { MyApp } from './app.component';
import {Home, Trees, Map, startPage, singleTree} from '../pages';
import {ReadMore, TreeItem, TreeModal, LocalStorage, MapComponent} from '../components';
import {ApiService} from '../services';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    Home,
    ReadMore,
    Trees,
    TreeItem,
    Map,
    TreeModal,
    startPage,
    MapComponent,
    singleTree
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
    Home,
    ReadMore,
    Trees,
    TreeItem,
    Map,
    TreeModal,
    startPage,
    MapComponent,
    singleTree
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ApiService, LocalStorage, Storage, Geolocation]
})
export class AppModule {}
