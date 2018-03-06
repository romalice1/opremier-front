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
    pumps = []
    tanks = []

    //URL builder
    getNozzlesUrl(){
        return this.baseUrl+"/nozzles/dealer/"+this.user.getUserSession().organization;
    }

    ngOnInit() {
        this.loadNozzles();
    }

    loadNozzles(){
        this.http.get( this.getNozzlesUrl() ).subscribe( res =>{
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
    addNozzle(event){
        let el = event.target.elements;
        let url = this.api.EQUIPMENT+"/nozzles";

        let nozzle = el[1].value
        let pump = el[2].value
        let tank = el[3].value


        
        let payload={
          id: "abcdef",
          name: nozzle,
          ownerId: this.user.getUserSession().organization,
          pumpId: pump,
          status: "active",
          tankId: tank
        }

        this.http.post( url, payload).subscribe( res =>{
            console.log(res)
            this.loadNozzles();
        });
    }

    //load tanks
    loadTanks(){
        let url = this.api.PRODUCT+"/dealer_stocks/dealer/"+this.user.getUserSession().organization;
        this.http.get<any>( url ).subscribe(res=>{
            this.tanks = res;
        });
    }

    // load pumps
    loadPumps(){
        let url = this.api.EQUIPMENT+"/pumps/dealer/"+this.user.getUserSession().organization;
        
        this.http.get<any>( url ).subscribe( res =>{
              this.pumps = res;
        });

        //Now load tanks
        this.loadTanks();
    }


}
