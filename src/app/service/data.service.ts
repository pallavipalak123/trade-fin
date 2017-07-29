import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CommonService {
    constructor(public http: Http) { }

    getData() {

        return this.http.get("../assets/data/table.json")
            .map(result => {
                return result.json()
            });
    }

    getDetails(){

        return this.http.get("../assets/data/details.json")
             .map(result => {
                 return result.json()
             });
    }
}