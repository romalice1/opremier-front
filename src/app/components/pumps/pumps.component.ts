import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-pumps',
  templateUrl: './pumps.component.html',
  styleUrls: ['./pumps.component.css']
})
export class PumpsComponent implements OnInit {

	constructor( 
		private http: HttpClient,
		private api: ApiService 
		) { }

	data = {};
  	baseUrl = this.api.EQUIPMENT;

	//URL builder
	getPumpsUrl(equipName){
		return this.baseUrl+"/equipment_types/name/"+equipName;
	}

	ngOnInit() {
		this.http.get( this.getPumpsUrl("pump") ).subscribe(
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
