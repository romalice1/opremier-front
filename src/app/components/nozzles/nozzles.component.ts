import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nozzles',
  templateUrl: './nozzles.component.html',
  styleUrls: ['./nozzles.component.css']
})
export class NozzlesComponent implements OnInit {

    data = {};
      baseUrl = "http://41.74.172.131:8093";

    //URL builder
    getNozzlesUrl(equipName){
        return this.baseUrl+"/oltranz/services/equipment/equipment_types/name/"+equipName;
    }

    constructor( private http: HttpClient ) { }

    ngOnInit() {
        this.http.get( this.getNozzlesUrl("1") ).subscribe(
          res =>{
              console.log(res);
              this.data = res;
          });
    }

    //Update Nozzle
    updateNozzle(childId, parentId, relationshipId){ // Faulty - check API doc
        this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
            res =>{
                console.log(res);
        });
        console.log("Nozzle updater clicked");
    }

    //remove a Nozzle
    removeNozzle(childId, parentId, relationshipId){ // Faulty - check APi doc
        this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
            res =>{
                console.log(res);
        });
        console.log("Nozzle removal clicked");
    }

    //Add a Nozzle
    addNozzle(childId, parentId, relationshipId){ // Faulty - check APi doc
        this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
            res =>{
                console.log(res);
        });
        console.log("Nozzle addition clicked");
    }


}
