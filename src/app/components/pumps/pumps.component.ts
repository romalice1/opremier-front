import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pumps',
  templateUrl: './pumps.component.html',
  styleUrls: ['./pumps.component.css']
})
export class PumpsComponent implements OnInit {

	data = {};
  	baseUrl = "http://41.74.172.131:8093";

	//URL builder
	getPumpsUrl(equipName){
		return this.baseUrl+"/oltranz/services/equipment/equipment_types/name/"+equipName;
	}

	constructor( private http: HttpClient ) { }

	ngOnInit() {
		this.http.get( this.getPumpsUrl("1") ).subscribe(
  		res =>{
  			console.log(res);
  			this.data = res;
  		});
	}


	//Update Pump
	updatePump(childId, parentId, relationshipId){ // Faulty - check API doc
		this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
			res =>{
				console.log(res);
		});
		console.log("Pump updater clicked");
	}

	//remove a Pump
	removePump(childId, parentId, relationshipId){ // Faulty - check APi doc
		this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
			res =>{
				console.log(res);
		});
		console.log("Pump removal clicked");
	}

	//Add a Pump
	addPump(childId, parentId, relationshipId){ // Faulty - check APi doc
		this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
			res =>{
				console.log(res);
		});
		console.log("Pump addition clicked");
	}


}
