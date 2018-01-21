import { Component, OnInit } from '@angular/core';
import { ROUTER_CONFIGURATION} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /* Authentication */ 
  loginUser(e){
  	e.preventDefault();
  	
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;

  	if (true){
  		
  	}

  	console.log(username);
  }
}
