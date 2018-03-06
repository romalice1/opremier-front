import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { UserService } from '../../services/user.service';
import { ApiService} from '../../services/api/api.service';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-voucher-cust',
  templateUrl: './voucher-cust.component.html',
  styleUrls: ['./voucher-cust.component.css']
})
export class VoucherCustComponent implements OnInit {

	customers:	any;
	success:	any;
	error:		any

	constructor(
	  	private user: 	UserService,
	  	private api: 	ApiService,
	  	private http: 	HttpClient,
      protected spinner: Ng4LoadingSpinnerService) { }

  	ngOnInit() {
  		//Get customer list
  		//get customers
        var url=this.api.ORGANIZATION+"/organization_relationships/parent/"+this.user.getUserSession().organization+"/relationship?name=CUSTOMER";
        this.http.get(url).subscribe( res => {
            this.customers = res;
        });
  	}

  	addCustomer(e){
      this.spinner.show()

  		e.preventDefault();

  		let url = this.api.VOUCHERS+"/customer";
  		let el = e.target.elements;

  		let payload = {
			applicationId: 			"5ae697d2050611e8b0aa577f7ae20263",
			businessName: 			el[1].value,
			tin: 					el[2].value || "",
			contactPersonFirstName: el[3].value,
			contactPersonLastName: 	el[4].value,
			contactPersonEmail: 	el[5].value,
			contactPersonTelephone: el[6].value,
  			address: 				el[7].value || "",
			merchantId: 			this.user.getUserSession().organization
  		}

      let response :any;

  		this.http.post(url, payload).subscribe(res=>{

  			this.spinner.hide()
        
        response = res;

  			if( response.code == 200 ){
  				this.success = response.description;
  				this.error = false;
  			}else{
  				this.error = response.description;
  				this.success = false;
  			}
  		});
  	}
}