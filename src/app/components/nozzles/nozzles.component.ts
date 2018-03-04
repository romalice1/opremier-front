import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nozzles',
  templateUrl: './nozzles.component.html',
  styleUrls: ['./nozzles.component.css']
})
export class NozzlesComponent implements OnInit {

    constructor( 
        private http: HttpClient,
        private api: ApiService,
        private user: UserService ) { }

    nozzles = {};
    baseUrl = this.api.EQUIPMENT;

    //URL builder
    getNozzlesUrl(){
        return this.baseUrl+"/nozzles/dealer/"+this.user.getUserSession().organization;
    }

    ngOnInit() {
        this.http.get( this.getNozzlesUrl() ).subscribe(
          res =>{
              this.nozzles = res;
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
