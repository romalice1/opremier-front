import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { 

	constructor( 
		private user: UserService,
		private router: Router
		) { }

	session = this.user.getUserSession();
	isLoggedIn = this.user.getUserLoggedIn();

	ngOnInit() {
		//Redirect user if session not set
		if ( this.user.getUserLoggedIn() === false ){
			this.router.navigate(['/login']);
		}
  	}

  	/*Logout*/
  	userLogout(){
  		if( this.user.destroyUserSession() ){
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
