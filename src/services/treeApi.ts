import {Injectable} from '@angular/core'
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiService{
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json'
    });

    forest;

    api_url: string = 'http://adriandunham.com/trees.json';

    constructor(private http: Http){

        this.http.get('http://adriandunham.com/trees.json')
            .subscribe(res => this.forest = res.json());

    }

    extractData(res: Response){
        console.log(res)
        return res.json()
    }

    getForest(){
        console.log(this.api_url);

        console.log(this.forest);

        return this.forest

    }




}