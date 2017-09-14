var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from "../../http.service";
import * as Leaflet from 'leaflet';
var HomePage = (function () {
    //asyncUsers = this.httpService.getData();
    function HomePage(navCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.users = [];
        this.events = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.drawMap();
        this.onGetUsers();
        this.onGetEvents();
    };
    HomePage.prototype.drawMap = function () {
        this.map = Leaflet.map('map', {
            center: [49.0000, 9.5000],
            zoom: 3
        });
        Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
            //attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 6,
            minZoom: 3
        }).addTo(this.map);
    };
    HomePage.prototype.onGetUsers = function () {
        var _this = this;
        this.httpService.getUsers()
            .subscribe(function (data) { return _this.users = data; }, function (err) { return console.log(err); }, function () { return _this.markUsers(); });
    };
    HomePage.prototype.onGetEvents = function () {
        var _this = this;
        this.httpService.getEvents()
            .subscribe(function (data) { return _this.events = data; }, function (err) { return console.log(err); }, function () { return _this.markEvents(); });
    };
    HomePage.prototype.markUsers = function () {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var u = _a[_i];
            if (typeof u.location[0] !== 'undefined') {
                Leaflet.marker([u.location[0].lat, u.location[0].lng]).addTo(this.map);
            }
        }
    };
    HomePage.prototype.markEvents = function () {
        var redMarker = Leaflet.icon({
            iconUrl: 'assets/images/red-marker-icon.png',
            shadowUrl: 'assets/images/marker-shadow.png',
            iconSize: [25, 41],
            shadowSize: [50, 64],
            iconAnchor: [12.5, 41],
            shadowAnchor: [12.5, 62],
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        for (var _i = 0, _a = this.events; _i < _a.length; _i++) {
            var e = _a[_i];
            if (typeof e.location[0] !== 'undefined') {
                Leaflet.marker([e.location[0].lat, e.location[0].lng], { icon: redMarker }).addTo(this.map);
            }
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html',
        providers: [HttpService]
    }),
    __metadata("design:paramtypes", [NavController, HttpService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map