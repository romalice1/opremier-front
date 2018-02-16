import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	constructor(
		private http: HttpClient,
		private api: ApiService) { }

	products;
	baseUrl = this.api.PRODUCT;

	//URL builder
	getUrl(){
		return this.baseUrl+"/products";
	}

	ngOnInit() {
		// Get all products
		this.http.get( this.getUrl() ).subscribe(
	  		res =>{
	  			this.products = res;
	  	});
	}


	//Update Product
	updateProduct(childId, parentId, relationshipId){ // Faulty - check API doc
		this.http.post( this.baseUrl+"/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {})
		.subscribe(
			res =>{
				console.log(res);
		});
		console.log("Product updater clicked");
	}

	//remove a Product
	removeProduct(childId, parentId, relationshipId){ // Faulty - check APi doc
		this.http.post( this.baseUrl+"/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {})
		.subscribe(
			res =>{
				console.log(res);
		});
		console.log("Product removal clicked");
	}

	//Add a Product
	addProduct(childId, parentId, relationshipId){ // Faulty - check APi doc
		let payload = {
			category: {
				activitySector: {
				  	id: 0,
				  	isActive: true,
				  	name: "string"
				},
				description: "string",
				id: 0,
				name: "string",
				parentCategory: {}
			},
			description: "string",
			id: "string",
			isActive: true,
			name: "string",
			recordDate: "yyyy-MM-dd HH:mm:ss"
		}

		this.http.post( this.baseUrl+"/products",{})
		.subscribe(
			res =>{
				console.log(res);
		});
	}


}
