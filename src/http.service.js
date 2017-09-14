var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.sendData = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://ng2-de-http.firebaseio.com/data', body, { headers: headers })
            .catch(function (response) {
            return Observable.throw(response.json());
        });
    };
    HttpService.prototype.getData = function () {
        return this.http.get('/api/user')
            .map(function (response) {
            var data = response.json();
            var returnArray = [];
            for (var key in data) {
                returnArray.push(data[key]);
            }
            return returnArray;
        });
    };
    HttpService.prototype.getUsers = function () {
        return this.http.get('/api/user')
            .map(function (response) {
            var data = response.json();
            var returnArray = [];
            for (var key in data) {
                returnArray.push(data[key]);
            }
            return returnArray;
        });
    };
    HttpService.prototype.getEvents = function () {
        return this.http.get('/api/event')
            .map(function (response) {
            var data = response.json();
            var returnArray = [];
            for (var key in data) {
                returnArray.push(data[key]);
            }
            return returnArray;
        });
    };
    HttpService.prototype.getEventUsers = function (id) {
        return this.http.get('/api/user/' + id + '/attended')
            .map(function (response) {
            var data = response.json();
            var returnArray = [];
            for (var key in data) {
                returnArray.push(data[key]);
            }
            return returnArray;
        });
    };
    HttpService.prototype.getUserEvents = function (id) {
        return this.http.get('/api/event/' + id + '/attendants')
            .map(function (response) {
            var data = response.json();
            var returnArray = [];
            for (var key in data) {
                returnArray.push(data[key]);
            }
            return returnArray;
        });
    };
    return HttpService;
}());
HttpService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map