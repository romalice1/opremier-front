import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private useremail;
  private access_token;
  private firstName;
  private lastName;

  constructor( private cookieService: CookieService ) { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn( state ){
  	//Test if user is trully logged in (from cookie)
  	if(state == true){
  		// Returns true
  		if( this.cookieService.check('opremier-session') ){
  			this.isUserLoggedIn  = state;
  		}else{
  			this.isUserLoggedIn  = false;
  		}
  	}else{
  		if( this.cookieService.check('opremier-session') == false ){
  			this.isUserLoggedIn  = state;
  		}
  	}
  }

  getUserLoggedIn(){
  	if( this.cookieService.check('opremier-session') ){
  		return true;
  	}else{
  		return false;
  	}
  }
}
