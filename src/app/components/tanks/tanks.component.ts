import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})
export class TanksComponent implements OnInit {

    constructor( 
        private http: HttpClient,
        private api: ApiService ) { }

    data = {};
    baseUrl = this.api.EQUIPMENT;

    //URL builder
    getTanksUrl(equipName){
        return this.baseUrl+"/equipment_types/name/"+equipName;
    }

    ngOnInit() {
        this.http.get( this.getTanksUrl("tanks") ).subscribe(
          res =>{
              console.log(res);
              this.data = res;
          });
    }


    //Update Tank
    updateTank(childId, parentId, relationshipId){ // Faulty - check API doc
        this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
            res =>{
                console.log(res);
        });
        console.log("Tank updater clicked");
    }

    //remove a Tank
    removeTank(childId, parentId, relationshipId){ // Faulty - check APi doc
        this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
            res =>{
                console.log(res);
        });
        console.log("Tank removal clicked");
    }

    //Add a Tank
    addTank(childId, parentId, relationshipId){ // Faulty - check APi doc
        this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
            res =>{
                console.log(res);
        });
        console.log("Tank addition clicked");
    }


}
