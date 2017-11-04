import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginHandler() {

  	let loginObject = {
		"username": this.username,
		"password": this.password
	}
	let xhr = new XMLHttpRequest();
	// REMEMBER TO CHANGE TO LINK
	xhr.open("POST", "http://127.0.0.1/api/login-data", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			let response = JSON.parse(xhr.responseText);
			if(response != "Try again!") {
				window.localStorage.setItem("loggedUser", response.ID);
			} 
		}
	}
	xhr.send(JSON.stringify(loginObject));

  }

}
