import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpService } from "../../http.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [HttpService]
})
export class ContactPage {

	users: any = [];
  constructor(public navCtrl: NavController, private httpService: HttpService) {
  	this.onGetData();
  }

  userSelected(id){
		// Push an `id` to the `'detail-page'`
    this.navCtrl.push('detail-map', {
      'id': id,
      'type': 'user'
    })
	}

	onGetData() {
    this.httpService.getUsers()
      .subscribe(
        data => this.users = data,
        err => console.log(err),
        () => console.log(this.users)
      );
  }
}
