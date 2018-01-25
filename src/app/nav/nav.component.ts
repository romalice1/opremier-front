import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { 

	constructor( 
		private cookieService: CookieService,
		private user: UserService,
		private router: Router
		) { }
  	

	ngOnInit() {
		//Check if session exists
		if( this.cookieService.check("opremier-session") ){
			//Session cookie in JSON
			var session = this.cookieService.get("opremier-session");
			//Parse session data to object
			// var sessionDataObj = JSON.parse(session);
			console.log( "Cookie: " + session );
		}else{
			console.log("Missing cookie");
		}
  	}

  	/*Logout*/
  	userLogout(){
  		//Destroy the cookie
  		this.cookieService.delete("opremier-session");
  		//Redirect user to login
  		if( !this.cookieService.check('opremier-session') ){
	  		this.router.navigate(['/login']);
	  	}  		
  	}

}
