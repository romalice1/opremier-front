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

	products={};
	alert;
	categories:any = [];
	baseUrl = this.api.PRODUCT;
	updateUrl = this.api.PRODUCT;

	//URL builder
	getUrl(vendorId){
		return this.baseUrl+"/products/dealer/"+vendorId;
	}

	//Get product categories
	getCategories(){
		let url = this.baseUrl+"/categories"

		this.http.get( url ).subscribe(
	  		res =>{
	  			this.categories = res;
	  	});
	}

	ngOnInit() {
		// Get all products
		this.loadComponentData()
	}

	loadComponentData(){
		this.http.get( this.getUrl( this.user.getUserSession().organization ) ).subscribe(
	  		res =>{
	  			this.products = res;
	  	});
	}

	//Update Product
	updateProduct(index){
		let productId = index.path[3].cells[0].innerText;

		let payload = {
			category: "string",
			price: 0,
			productId: "string",
			productName: "string",
			vendorId: "string"

		}

		// this.http.post(this.updateUrl, payload).subscribe(
		// 	res =>{
		// 		console.log(res);
		// });
	}

	//Add a Product
	addProduct(e){
		e.preventDefault()

		let el = e.target.elements;

		let payload = {
			category: el[2].value,
			price: el[3].value,
			productName: el[1].value,
			vendorId: this.user.getUserSession().organization

		}

		this.http.post<any>( this.api.PRODUCT+"/product/add",payload).subscribe(
			res =>{
				this.alert = res.description;
				this.loadComponentData()
		});
	}


}
