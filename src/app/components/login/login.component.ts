import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Headers, Http, HttpModule } from '@angular/http';
import { UserService } from '../../services/user.service';
import { ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	cookieValue = {}; // cookie to hold session data
	private webAPI = this.api.USER_MANAGEMENT+"/users/email";
  private orgWebApi = this.api.ORGANIZATION+"/organization_user/user/";
  username:string;
  password:string;
  alert: string; // alert if login fails

  constructor(
	  	private router: Router,
	  	private authService: AuthService,
	  	private cookieService: CookieService,
	  	private http: Http,
      private user: UserService,
      private api: ApiService
  	) { }

  ngOnInit() {
    //Redirect to dashboard if session is on
    if( this.user.getUserLoggedIn() ){
      this.router.navigate(['/stock']);
    }
  }

  /* Authentication */ 
  loginUser(e){

  	e.preventDefault(); // Prevent the form from submiting by default
  	
  	// Get user form data
  	this.username = e.target.elements[0].value;
  	this.password = e.target.elements[1].value;
	
  	this.authService.login(this.username, this.password)
  		.subscribe(
  				data=>{
  					this.authService.AccessToken = data.access_token;
  					// Check if response has error
  					if(data.error){
  						this.alert = "Invalid username or password!";
  					}else{  						
  						//2. Get user details for session tracking (full name, id)
  						this.http.get( this.webAPI+"?p="+this.username+"&access_token=" +this.authService.AccessToken).subscribe(
  							res => {
                  // Get organization user belongs to
                  this.http.get( this.orgWebApi+res.json().id ).subscribe(
                    org=>{

                    //Make sure the response has data
                    if(org.json().length != 0){
                      //1. Create session cookie
                      this.user.setUserSessionCookie(
                        res.json().id,
                        this.authService.AccessToken, 
                        this.username,
                        res.json().firstName,
                        res.json().lastName,
                        org.json()[0].organization.id
                        );

                      this.router.navigate(['/stock']);
                    }

                  });
						   });
  					}

  				}
  			);
  }
}
