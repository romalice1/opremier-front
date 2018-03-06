import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pumps',
  templateUrl: './pumps.component.html',
  styleUrls: ['./pumps.component.css']
})
export class PumpsComponent implements OnInit {

	constructor( 
		private http: HttpClient,
		private api: ApiService,
		private user: UserService
		) { }

	pumps = {};
  	baseUrl = this.api.EQUIPMENT;
  	tanks = [];
  	alert;

	//URL builder
	getPumpsUrl(){
		return this.api.EQUIPMENT+"/pumps/dealer/"+this.user.getUserSession().organization;
	}

	ngOnInit() {
		this.loadPumps()
	}

	loadTanks(){
		let url = this.api.PRODUCT+"/dealer_stocks/dealer/"+this.user.getUserSession().organization;
		this.http.get<any>( url ).subscribe(res=>{
			this.tanks = res;
		});
	}

	loadPumps(){
		this.http.get( this.getPumpsUrl() ).subscribe(
  		res =>{
  			this.pumps = res;
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
	addPump( e ){
		console.log(e.target.elements)

		let url = this.api.EQUIPMENT+"/pumps";

		let payload={
			id:'abcdefgshd',
		  	name: e.target.elements[1].value,
		  	ownerId: this.user.getUserSession().organization,
		  	tankId: e.target.elements[2].value,
		}

		this.http.post<any>( url, payload).subscribe(
			res =>{
				if(res.id){
					this.alert = "The new pump was successfully added";
				}
				this.loadPumps()
		});
	}


}
