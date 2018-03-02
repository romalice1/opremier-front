import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	constructor(
		private http: HttpClient,
		private api: ApiService,
		private user: UserService) { }

	products;
	baseUrl = this.api.PRODUCT;
	updateUrl = this.api.PRODUCT+""

	//URL builder
	getUrl(vendorId){
		return this.baseUrl+"/products/vendor/"+vendorId;
	}

	ngOnInit() {
		// Get all products
		this.http.get( this.getUrl( this.user.getUserSession().organization ) ).subscribe(
	  		res =>{
	  			this.products = res;
	  	});
	}


	//Update Product
	updateProduct(){
		let payload = {
			category: "string",
			price: 0,
			productId: "string",
			productName: "string",
			vendorId: "string"

		}
		this.http.post(this.updateUrl, payload)
		.subscribe(
			res =>{
				console.log(res);
		});
	}

	//Add a Product
	addProduct(e){
		e.preventDefault()


		let payload = {
			category: "string",
			price: 0,
			productId: "string",
			productName: "string",
			vendorId: "string"

		}

		this.http.post( this.api.PRODUCT+"/product/add",payload)
		.subscribe(
			res =>{
				// TODO
		});
	}


}
