import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-tanks',
  templateUrl: './tanks.component.html',
  styleUrls: ['./tanks.component.css']
})
export class TanksComponent implements OnInit {

    constructor( 
        private http: HttpClient,
        private api: ApiService,
        private user: UserService ) { }

    tanks = {};
    baseUrl = this.api.EQUIPMENT;

    //URL builder
    getTanksUrl(){
        let url = this.api.PRODUCT+"/dealer_stocks/dealer/"+this.user.getUserSession().organization;
        return url;
    }

    ngOnInit() {
        this.loadComponentData();
    }


    //Load tanks data
    loadComponentData(){
        this.http.get( this.getTanksUrl() ).subscribe(
          res =>{
              this.tanks = res;
          });
    }
    //Update Tank
    updateTank(childId, parentId, relationshipId){ // Faulty - check API doc
        this.http.post( this.baseUrl+"/oltranz/services/equipment/equipments", {}).subscribe(
            res =>{
                console.log(res);
        });
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
    }


}
