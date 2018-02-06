import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

//Inject cookie to track session
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'Welcome to O-premier';

	constructor( private cookieService: CookieService ) { }

}