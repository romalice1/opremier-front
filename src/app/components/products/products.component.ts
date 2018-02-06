import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	data = {};
	baseUrl = "http://41.74.172.131:8110";

	//URL builder
	getUrl(parentId, relationshipId){
		return this.baseUrl+"/oltranz/services/product/products";
	}

	constructor(private http: HttpClient) { }

	ngOnInit() {
		// Get all products
		this.http.get( this.getUrl("1","1") ).subscribe(
	  		res =>{
	  			console.log(res);
	  			this.data = res;
	  	});
	}


	//Update Product
	updateProduct(childId, parentId, relationshipId){ // Faulty - check API doc
		this.http.post( this.baseUrl+"/oltranz/services/organizations/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {}).subscribe(
			res =>{
				console.log(res);
		});
		console.log("Product updater clicked");
	}

	//remove a Product
	removeProduct(childId, parentId, relationshipId){ // Faulty - check APi doc
		this.http.post( this.baseUrl+"/oltranz/services/organizations/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {}).subscribe(
			res =>{
				console.log(res);
		});
		console.log("Product removal clicked");
	}

	//Add a Product
	addProduct(childId, parentId, relationshipId){ // Faulty - check APi doc
		this.http.post( this.baseUrl+"/oltranz/services/organizations/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {}).subscribe(
			res =>{
				console.log(res);
		});
		console.log("Product addition clicked");
	}


}
