import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pos-terminal',
  templateUrl: './pos-terminal.component.html',
  styleUrls: ['./pos-terminal.component.css']
})
export class PosTerminalComponent implements OnInit {

	data = {};
  	baseUrl = "http://41.74.172.131:8093";

	//URL builder
	getPOSUrl(equipName){
		return this.baseUrl+"/oltranz/services/equipment/equipment_types/name/"+equipName;
	}

	constructor( private http: HttpClient ) { }

	ngOnInit() {
		this.http.get( this.getPOSUrl("1") ).subscribe(
  		res =>{
  			console.log(res);
  			this.data = res;
  		});
	}


	//Update POS
	updatePOS(childId, parentId, relationshipId){ // Faulty - check API doc
		this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
			res =>{
				console.log(res);
		});
		console.log("POS updater clicked");
	}

	//remove a POS
	removePOS(childId, parentId, relationshipId){ // Faulty - check APi doc
		this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
			res =>{
				console.log(res);
		});
		console.log("POS removal clicked");
	}

	//Add a POS
	addPOS(childId, parentId, relationshipId){ // Faulty - check APi doc
		this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
			res =>{
				console.log(res);
		});
		console.log("POS addition clicked");
	}


}
