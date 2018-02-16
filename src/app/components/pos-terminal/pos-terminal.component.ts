import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pos-terminal',
  templateUrl: './pos-terminal.component.html',
  styleUrls: ['./pos-terminal.component.css']
})
export class PosTerminalComponent implements OnInit {

	data;

	constructor( 
		private http: HttpClient,
		private api: ApiService,
		private user: UserService
	 ) { }
	baseUrl = this.api.EQUIPMENT;
	
	//URL builder
	getPOSUrl(vendorId){
		return this.baseUrl+"/pos/owner/"+vendorId;
	}

	ngOnInit() {
		this.http.get( this.getPOSUrl( this.user.getUserSession().organization ) ).subscribe(
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
	addPOS(e){ // Faulty - check APi doc
		e.preventDefault();
		let pos_name = e.target.elements[1].value

		// this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
		// 	res =>{
		// 		console.log(res);
		// });
		console.log("POS addition clicked");
	}


}
