import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

	constructor(
		private http: HttpClient,
	    private api: ApiService
	) { }

	data;
	url = this.api.PRODUCT+"/vendor_stock_order";

	ngOnInit() {
		this.http.get( this.url ).subscribe(
		res =>{
			this.data = res;
		});
	}

}
