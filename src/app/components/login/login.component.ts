import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenParams } from '../../classes/TokenParams';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Headers, Http, HttpModule } from '@angular/http';
import { UserService } from '../../services/user.service';

// Import the interface
// import { SessionParams } from '../../classes/session/SessionParams';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	cookieValue = {}; // cookie to hold session data
	private webAPI = "http://41.74.172.131:8084/oltranz/services/usermanagement/users/email";

  tokenParams: TokenParams; // token params
  username:string;
  password:string;
  alert: string; // alert if login fails

  constructor(
	  	private router: Router,
	  	private authService: AuthService,
	  	private cookieService: CookieService,
	  	private http: Http,
      private user: UserService
  	) { }

  ngOnInit() {
  }

  /* Authentication */ 
  loginUser(e){

  	e.preventDefault(); // Prevent the form from submiting in default mode
  	
  	// Get user form data
  	this.username = e.target.elements[0].value;
  	this.password = e.target.elements[1].value;

	
  	this.authService.login(this.username, this.password)
  		.subscribe(
  				data=>{
  					this.tokenParams =  data; 
  					this.authService.AccessToken = this.tokenParams.access_token;

  					// Check if response has error
  					if(data.error){
  						this.alert = "Invalid username or password!";
  					}else{  						
  						//2. Get user details for session tracking (full name, id)
  						this.http.get( this.webAPI+"?p="+this.username+"&access_token="+this.authService.AccessToken ).subscribe(
  							res => {

	  							// Save user details as text. Getting them back will have to parse them to json.
	  							var sessionData = {
	  								access_token: this.authService.AccessToken,
	  								email: this.username,
	  								firstName: res.json().firstName,
	  								lastName: res.json().lastName
	  							};

                  var stringSessionData = JSON.stringify(sessionData);
                  console.log("Saving Session: "+stringSessionData);

		  						//1. Create session cookie
		  						this.cookieService.set( 'opremier-session', stringSessionData);

                  //Change user login state
                  this.user.setUserLoggedIn(true);

	  							// Set route to dashboard
	  							this.router.navigate(['/stock']);

						});
  					}

  				}
  			);
  }
}
