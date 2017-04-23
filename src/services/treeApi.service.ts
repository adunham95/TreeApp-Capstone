import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService{
    api_url: string = '../assets/treesFULL.json';

    constructor(private http: Http){}

    getForest(){
      return this.http.get(this.api_url).map((res:Response) => res.json());
    }

}
