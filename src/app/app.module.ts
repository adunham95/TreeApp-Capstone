import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { MyApp } from './app.component';
import {Home, Trees, Map, startPage, singleTree} from '../pages';
import {ReadMore} from '../components'
import {ApiService} from '../services';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Trees,
    Map,
    startPage,
    singleTree,
    ReadMore
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
    Trees,
    Map,
    startPage,
    singleTree,
    ReadMore
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ApiService, Storage, Geolocation]
})
export class AppModule {}
