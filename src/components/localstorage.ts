import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

/*
 Generated class for the Localstorage provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class LocalStorage {

  constructor(public http: Http,private storage:Storage) {
    console.log('Hello Localstorage Provider');
  }

  firstTimeRun(){
    this.storage.set('firstRun',true);
  }

  didRun(){
    this.storage.get('firstRun').then(run=>{
      console.log('firstRun: '+ run);
      return run
    });

  }

  //store the email address
  setEmail(email){
    this.storage.set('email',email);
    console.log("email set")
  }

  //get the stored email
  getEmail(){
    this.storage.get('email').then(email=>{
      console.log('email: '+ email);
    });
  }


  //clear the whole local storage
  clearStorage(){
    this.storage.clear().then(()=>{
      console.log('all keys are cleared');
    });
  }

}
