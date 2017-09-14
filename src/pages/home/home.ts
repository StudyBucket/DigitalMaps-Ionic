import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpService } from "../../http.service";

import * as Leaflet from 'leaflet';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpService]
})
export class HomePage implements OnInit {

	map: any;
	users: any = [];
	events: any = [];
  //asyncUsers = this.httpService.getData();
  
  constructor(public navCtrl: NavController, private httpService: HttpService) { }

  ngOnInit(): void {
    this.drawMap();
    this.onGetUsers();	
    this.onGetEvents();
  }

  drawMap(): void {
    this.map = Leaflet.map('map', {
		    center: [49.0000, 9.5000],
		    zoom: 3
		});
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
      //attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 6,
      minZoom: 3
    }).addTo(this.map);
  }

  onGetUsers() {
    this.httpService.getUsers()
      .subscribe(
        data => this.users = data,
        err => console.log(err),
        () => this.markUsers()
      );
  }

  onGetEvents() {
    this.httpService.getEvents()
      .subscribe(
        data => this.events = data,
        err => console.log(err),
        () => this.markEvents()
      );
  }

	markUsers(){
		for(let u of this.users){
			if (typeof u.location[0] !== 'undefined') {
				Leaflet.marker([u.location[0].lat, u.location[0].lng]).addTo(this.map);
			}
		}
	}

	markEvents(){
		var redMarker = Leaflet.icon({
		    iconUrl: 'assets/images/red-marker-icon.png',
		    shadowUrl: 'assets/images/marker-shadow.png',
		    iconSize:     [25, 41], // size of the icon
		    shadowSize:   [50, 64], // size of the shadow
		    iconAnchor:   [12.5, 41], // point of the icon which will correspond to marker's location
		    shadowAnchor: [12.5, 62],  // the same for the shadow
		    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});

		for(let e of this.events){
			if (typeof e.location[0] !== 'undefined') {
				Leaflet.marker([e.location[0].lat, e.location[0].lng], {icon: redMarker}).addTo(this.map);
			}
		}
	}

}
