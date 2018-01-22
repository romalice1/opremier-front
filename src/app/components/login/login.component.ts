import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenParams } from '../../classes/TokenParams';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenParams: TokenParams;
  username:string;
  password:string;
  alert: string; // alert if login fails

  constructor(
	  	private router: Router,
	  	private authService: AuthService
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

  					console.log(data);
  					
  					// Check if response has error
  					if(data.error){
  						this.alert = "Invalid username or password!";
  					}else{
  						// Set route to dashboard
  						this.router.navigate(['/stock']);
  					}

  				}
  			);
  }
}
