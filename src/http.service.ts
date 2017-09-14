import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
  constructor(private http: Http) {
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://ng2-de-http.firebaseio.com/data', body, {headers: headers})
      .catch((response: Response) => {
        return Observable.throw(response.json());
      });
  }

  getData() {
    return this.http.get('/api/user')
      .map((response: Response) => {
        const data = response.json();
        const returnArray = [];
        for (let key in data) {
          returnArray.push(data[key]);
        }
        return returnArray;
      });
  }
}


/*
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  data: any;

  constructor(private http: Http) {
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('/api/user') 
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
*/
