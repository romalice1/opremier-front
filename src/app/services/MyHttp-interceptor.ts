import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

	constructor(private cookieService: CookieService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


		// Clone the request to add the new header.
		const newRequest = req.clone({
			headers: req.headers.set("Authorization", "Bearer "+this.cookieService.get("opremier-token") )
		});

		console.log("Sending request with new header now ...");

		// //send the newly created request
		return next.handle(newRequest);
		// 	.catch((error, caught) => {
		// 	//intercept the respons error and displace it to the console
		// 	console.log("Error Occurred");
		// 	console.log(error);
			
		// 	//return the error to the method that called it
		// 	return Observable.throw(error);
		// }) as any;
	}
}