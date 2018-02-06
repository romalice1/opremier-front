import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data = {};
  baseUrl = "http://41.74.172.131:8093";

  //URL builder
  getBranchesUrl(parentId, relationshipId){
  	return this.baseUrl+"/oltranz/services/organizations/organization_relationships/parent/"+parentId+"/relationship/"+relationshipId;
  }

   ngOnInit() {
  	this.http.get( this.getBranchesUrl("1","1") ).subscribe(
  		res =>{
  			console.log(res);
  			this.data = res;
  	});
  }


  //Update branch
  updateBranch(childId, parentId, relationshipId){ // Faulty - check API doc
  	this.http.post( this.baseUrl+"/oltranz/services/organizations/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {}).subscribe(
  		res =>{
  			console.log(res);
  	});
  	console.log("Branch updater clicked");
  }

  //remove a branch
  removeBranch(childId, parentId, relationshipId){ // Faulty - check APi doc
  	this.http.post( this.baseUrl+"/oltranz/services/organizations/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {}).subscribe(
  		res =>{
  			console.log(res);
  	});
  	console.log("Branch removal clicked");
  }

  //Add a branch
  addBranch(childId, parentId, relationshipId){ // Faulty - check APi doc
  	this.http.post( this.baseUrl+"/oltranz/services/organizations/organization_relationships/child/"+childId+"/relationship/"+relationshipId+"/parent/"+parentId, {}).subscribe(
  		res =>{
  			console.log(res);
  	});
  	console.log("Branch addition clicked");
  }


}
