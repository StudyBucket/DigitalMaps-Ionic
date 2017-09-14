import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from "../../http.service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [HttpService]
})
export class AboutPage {

	events: any = [];
  constructor(public navCtrl: NavController, private httpService: HttpService) {
  	this.onGetData();
  }

  eventSelected(id){
		// Push an `id` to the `'detail-page'`
    this.navCtrl.push('detail-map', {
      'id': id,
      'type': 'event'
    })
	}

  onGetData() {
    this.httpService.getEvents()
      .subscribe(
        data => this.events = data,
        err => console.log(err),
        () => console.log(this.events)
      );
  }

}
