import { Component, OnInit } from '@angular/core';
import { Headers, Http, HttpModule } from '@angular/http';
import { UserService } from '../../services/user.service';
import { ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-voucher-all',
  templateUrl: './voucher-all.component.html',
  styleUrls: ['./voucher-all.component.css']
})
export class VoucherAllComponent implements OnInit {

  constructor(
  	private user: UserService,
  	private api: ApiService,
  	private http: Http
  	) { }

  vouchers:any[];

  ngOnInit() {
  	//get all vouchers
  	this.http.get(this.api.VOUCHERS+"/vouchers/merchant/"+this.user.getUserSession().organization)
  	.subscribe(res=>{
  		this.vouchers = res.json().body;
  	});
  }

  // show voucher image

}
