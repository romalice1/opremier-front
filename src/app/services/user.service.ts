import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private useremail;
  private access_token;
  private firstName;
  private lastName;

  private session = {
    id:"",
    token:"",
    email:"",
    name:"",
    nickName:"",
    organization:""
  };

  constructor( private cookieService: CookieService ) { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn( state ){
  	//Test if user is trully logged in (from cookie)
  	if(state == true){
  		// Returns true
  		if( this.cookieService.check('o-token') ){
  			this.isUserLoggedIn  = state;
  		}else{
  			this.isUserLoggedIn  = false;
  		}
  	}else{
  		if( this.cookieService.check('o-token') == false ){
  			this.isUserLoggedIn  = state;
  		}
  	}
  }

  getUserLoggedIn(){
  	if( this.cookieService.check('o-token') ){
  		return true;
  	}else{
  		return false;
  	}
  }

  setUserSessionCookie(id, token, email, firstName, lastName, org){
    this.cookieService.set('o-userId', id);
    this.cookieService.set('o-token', token);
    this.cookieService.set('o-email',email);
    this.cookieService.set('o-name', firstName+" "+lastName);
    this.cookieService.set('o-nickName', firstName);
    this.cookieService.set('o-organization', org);
  }

  destroyUserSession(){
    this.cookieService.delete('o-token');
    this.cookieService.delete('o-userId');
    this.cookieService.delete('o-email');
    this.cookieService.delete('o-name');
    this.cookieService.delete('o-nickName');
    this.cookieService.delete('o-organization');

    if( this.cookieService.check('o-token')){
      return false;
    }else{
       return true;
    }
  }

  //Check if user session is on
  checkUserSession(){
    if( this.cookieService.check('o-token')){
      return true;
    }else{
       return false;
    }
  }

  getUserSession(){
    if(this.cookieService.check('o-token')){
      this.session.id = this.cookieService.get('o-userId');
      this.session.token = this.cookieService.get('o-token');
      this.session.email = this.cookieService.get('o-email');
      this.session.name = this.cookieService.get('o-name');
      this.session.nickName = this.cookieService.get('o-nickName');
      this.session.organization = this.cookieService.get('o-organization');

      return this.session;
    }else{
      return null;
    }
  }

}