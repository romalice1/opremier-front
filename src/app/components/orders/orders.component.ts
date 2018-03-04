import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

	constructor(
		private http: HttpClient,
	    private api: ApiService,
	    private user: UserService
	) { }

	orders={};
	url = this.api.PRODUCT+"/orders/dealer/"+this.user.getUserSession().organization;

	ngOnInit() {
		this.http.get( this.url ).subscribe( res =>{
			this.orders = res;
		});
	}

}
