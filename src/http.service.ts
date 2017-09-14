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


  getUsers() {
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

  getEvents() {
    return this.http.get('/api/event')
      .map((response: Response) => {
        const data = response.json();
        const returnArray = [];
        for (let key in data) {
          returnArray.push(data[key]);
        }
        return returnArray;
      });
  }

  getEventUsers(id) {
    return this.http.get('/api/user/' + id + '/attended')
      .map((response: Response) => {
        const data = response.json();
        const returnArray = [];
        for (let key in data) {
          returnArray.push(data[key]);
        }
        return returnArray;
      });
  }

  getUserEvents(id) {
    return this.http.get('/api/event/' + id + '/attendants')
      .map((response: Response) => {
        const data = response.json();
        const returnArray = [];
        for (let key in data) {
          returnArray.push(data[key]);
        }
        return returnArray;
      });
  }

  getUser(id) {
    return this.http.get('/api/user/' + id)
      .map((response: Response) => {
        const data = response.json();
        const returnArray = [];
        for (let key in data) {
          returnArray.push(data[key]);
        }
        return returnArray;
      });
  }

  getEvent(id) {
    return this.http.get('/api/event/' + id)
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
