import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { 

	route

	constructor( 
		private user: UserService,
		private router: Router,
		private location: Location
		) { 
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

	session;
	isLoggedIn;


	ngOnInit() {
		//Redirect user if session not set
		if ( this.user.getUserLoggedIn() === false ){
			this.router.navigate(['/login']);
		}

    this.isLoggedIn = this.user.getUserLoggedIn();
    this.session = this.user.getUserSession();
  	}

	/*Logout*/
	userLogout(){
		if( this.user.destroyUserSession() ){
			this.isLoggedIn = false;
			this.router.navigate(['/login']);
			
		}
	}



  	/*
  	private menuItemsArray: any[] = [ 
       {"title":"Electricity","link":"#"},
       {"title":"Mobile Bill","link":"#"},
       {"title":"Home and Kitchen","link":"#",
       "subItems":[
                   {"title":"Furniture","link":"#"},
                   {"title":"Cookware","link":"#"},
                  ]
       },
       {"title":"Car and Bike Accessories","link":"#",
        "subItems":[
                     {"title":"Tyres and Alloys","link":"#"},
                     {"title":"Comfort and Safety","link":"#"},
                    ]
       },
 	];
 
	public onMenuClose(){
		console.log("menu closed");
	}
	public onMenuOpen(){
		console.log("menu Opened");
	}
	private onItemSelect(item:any){
		console.log(item);
	}
	*/

}
