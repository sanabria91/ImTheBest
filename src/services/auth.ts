import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

@Injectable()
export class AuthService{
    
	public fireAuth: firebase.auth.Auth;
 	public userProfileRef : firebase.database.Reference;
  	
	constructor(public http: Http) {
    	this.fireAuth = firebase.auth();
    	this.userProfileRef = firebase.database().ref('/userProfile');
 	}	 

    signup(email:string, password:string):firebase.Promise<any>{
		return this.fireAuth.createUserWithEmailAndPassword(email,password)
		.then( newUser =>{
		this.userProfileRef.child(newUser.uid).set({
			email:email
		});
		});
    }
    
 	signin(email:string, password:string):firebase.Promise<any>{
   		 return this.fireAuth.signInWithEmailAndPassword(email,password);
  	}

	logout():firebase.Promise<void>{
		this.userProfileRef.child(this.fireAuth.currentUser.uid).off();
    	return this.fireAuth.signOut();
	}

	getActiveUser(){
		return firebase.auth().currentUser;
	}   
}