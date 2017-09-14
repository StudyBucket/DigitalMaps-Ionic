import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../http.service";

/**
 * Generated class for the DetailMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
	name: 'detail-map',
	segment: 'detail/:type/:id'
})
@Component({
  selector: 'page-detail-map',
  templateUrl: 'detail-map.html',
  providers: [HttpService]
})
export class DetailMapPage {

	typeParam: string;
	idParam: number; 

	user: any;
	event: any;

	users: any = [];
	events: any = [];
	pageTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpService) {
  	this.typeParam = navParams.get("type");
  	this.idParam = navParams.get("id");
  	if(this.typeParam == 'event'){
  		this.pageTitle = 'event & attendants';
  	} else {
  		this.pageTitle = 'user & attended events';
  	}
  }

  ionViewDidLoad() {
    console.log(this.idParam);

  }

  onGetEventData() {
    this.httpService.getEventUsers(this.idParam)
      .subscribe(
        data => this.users = data,
        err => console.log(err),
        () => console.log(this.users)
      );
  }


}
