import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private user: UserService
    ) { }

  branches;
  baseUrl = this.api.ORGANIZATION;

  //URL builder
  getBranchesUrl(vendorId){
  	// return this.baseUrl+"/organization_relationships/parent/"+parentId+"/relationship/"+relationshipId;
    return this.baseUrl+"/organization_relationships/parent/"+vendorId+"/relationship?name=DEALER";
  }

   ngOnInit() {
  	this.http.get( this.getBranchesUrl(this.user.getUserSession().organization ) ).subscribe(
  		res =>{
  			this.branches = res;
  	});
  }


  //Update branch
  updateBranch(branchId,){ // Faulty - check API doc
  	this.http.post( this.baseUrl+"/organization_relationships/child/"+branchId+"/relationship/parent/", {})
    .subscribe(
  		res =>{
  			console.log(res);
  	});
  }

  //remove a branch
  removeBranch(childId, parentId, relationshipId){ // Faulty - check APi doc
  	this.http.post( this.baseUrl+"/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {})
    .subscribe(
  		res =>{
  			console.log(res);
  	});
  	console.log("Branch removal clicked");
  }

  //Add a branch
  addBranch(childId, parentId, relationshipId){ // Faulty - check APi doc
  	this.http.post( this.baseUrl+"/oltranz/services/organizations/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {})
    .subscribe(
  		res =>{
  			console.log(res);
  	});
  	console.log("Branch addition clicked");
  }


}
