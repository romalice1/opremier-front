import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { 

	session;
	isLoggedIn;

	constructor( private user: UserService, private router: Router,	private location: Location) 
	{ 
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


	ngOnInit() {
		//Redirect user if session not set
		if ( this.user.getUserLoggedIn() === false ){
			this.router.navigate(['/login']);
		}

	    this.initNavbar()
  	}

	/*Logout*/
	userLogout(){
		if( this.user.destroyUserSession() ){
			this.isLoggedIn = false;
			this.router.navigate(['/login']);
			
		}
	}

	initNavbar(){
		this.isLoggedIn = this.user.getUserLoggedIn();
	    this.session = this.user.getUserSession();
	}

	
	/* MENU SHOW/HIDE OPTIONS */
	toggleDashboard(){
   		$('.dash_child').slideToggle(); //
  	}

	toggleEquipments(){
   		$('.equip_child').slideToggle(); //
  	} 

  	toggleVouchers(){
  		$('.voucher_child').slideToggle(); //
  	} 	

  	toggleUsers(){
  		$('.user_child').slideToggle(); //
  	} 

  	toggleLeftMenuBar(){
  		$('.left_menu_bar').slideToggle();
  	}

}
