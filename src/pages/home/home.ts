import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpService } from "../../http.service";
import { Data } from '../../data';

import * as Leaflet from 'leaflet';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpService, Data]
})
export class HomePage implements OnInit {

	map: any;
	users: any = [];
  asyncUsers = this.httpService.getData();
  
  constructor(public navCtrl: NavController, private httpService: HttpService, public data: Data) { }

  ngOnInit(): void {
    this.drawMap();
    this.onGetData();
    /*
   	this.data.load().subscribe(
      res => this.users = res,
      err => console.log(err),
      () => this.do()
    );
    */

		
  }

  drawMap(): void {
    //let map = Leaflet.map('map');
    this.map = Leaflet.map('map', {
		    center: [49.0000, 9.5000],
		    zoom: 3
		});
    Leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
      //attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 6,
      minZoom: 3
    }).addTo(this.map);

		

		
		//alert("hey!")
  }

  onGetData() {
    this.httpService.getData()
      .subscribe(
        data => this.users = data,
        err => console.log(err),
        () => this.do()
      );
  }

  /*
  loadPeople(){
	  this.httpService.getData()
	  .then(data => {
	    this.users = data;
	  });
	}
	*/

	do(){
		for(let u of this.users){
			if (typeof u.location[0] !== 'undefined') {
			  //alert(u.location[0].lat + u.location[0].lng);
				Leaflet.marker([u.location[0].lat, u.location[0].lng]).addTo(this.map);
			}
			
		}
	}


}
