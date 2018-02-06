import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})
export class TanksComponent implements OnInit {

    data = {};
      baseUrl = "http://41.74.172.131:8093";

    //URL builder
    getTanksUrl(equipName){
        return this.baseUrl+"/oltranz/services/equipment/equipment_types/name/"+equipName;
    }

    constructor( private http: HttpClient ) { }

    ngOnInit() {
        this.http.get( this.getTanksUrl("1") ).subscribe(
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
