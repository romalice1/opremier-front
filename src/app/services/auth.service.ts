import { Injectable }	from '@angular/core';
import {Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers, Http, HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import { TokenParams } from '../classes/TokenParams';

@Injectable()
export class AuthService{
	
	AccessToken:string = "";
	constructor(private http: Http){}

	private TokenApi = "http://41.74.172.131:8084/oltranz/services/usermanagement/login";

	login(Username:string, Password:string): Observable<TokenParams>{
		
		var headersForTokenAPI = new Headers( {
			"Content-Type": "application/json",
			"Accept": "application/json"
		});
		
		var data = {
		  "password": Password,
		  "username": Username
		}

		return this.http.post( this.TokenApi, data, {headers: headersForTokenAPI})
			.map(res => res.json());
	}

}