import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'Welcome to O-premier';

	constructor(private user: UserService, private router: Router, private location: Location) {
		//track router
		router.events.subscribe((val)=>{
			if(location.path() == '/stock'){
				//Check if session is on
				if( this.user.getUserLoggedIn() ){
		        	this.isLoggedIn = true;
				}
		    }
		});
	}

	
	isLoggedIn = this.user.getUserLoggedIn();

}