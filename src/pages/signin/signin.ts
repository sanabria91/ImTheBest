import { Component } from '@angular/core';
import { IonicPage, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

	constructor( private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController){}

  onSignin(form: NgForm){
  	const loading = this.loadingCtrl.create({
  		content: 'Signing You In...'
  	});
  	loading.present();
  	this.authService.signin(form.value.email, form.value.password)
  	.then(data => {
  		loading.dismiss();
  	})
		.catch(error => {
			loading.dismiss();
			const alert = this.alertCtrl.create({
				title: 'Signup failed!',
				message: error.message,
				buttons: ['OK']
			});
			alert.present();
		});
  }
}
