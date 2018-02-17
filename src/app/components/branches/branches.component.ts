import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService} from '../../services/api/api.service';
import { UserService } from '../../services/user.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private user: UserService,
    protected spinner: Ng4LoadingSpinnerService
    ) { }

  branches;
  tanks;
  baseUrl = this.api.ORGANIZATION;
  orgId = this.user.getUserSession().organization;
  error;
  success;

  //URL builder
  getBranchesUrl(vendorId){
  	// return this.baseUrl+"/organization_relationships/parent/"+parentId+"/relationship/"+relationshipId;
    return this.baseUrl+"/organization_relationships/parent/"+vendorId+"/relationship?name=DEALER";
  }

   ngOnInit() {
     this.spinner.show()
  	this.http.get( this.getBranchesUrl( this.orgId ) ).subscribe(
  		res =>{
  			this.branches = res;

        this.spinner.hide()  

        //get tanks - Invalid CORS returned
        // this.http.get( this.api.PRODUCT+"vendors/"+this.orgId+"/stocks" ).subscribe(
        //   res =>{
        //     this.tanks = res;   
        // });
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
  addBranch(e){ 
    e.preventDefault()
    this.spinner.show()

    this.error=false;
    this.success=false;

    let el = e.target.elements;

    //Validate form
    if( el[1].value=="" || el[3].value=="" || el[5].value=="")
    {
      this.error = "All fields are required";
      this.success=false;
      this.spinner.hide()
    }else{

      let payload={
        businessName:  el[1].value,
        address:       el[2].value,
        tin:           el[3].value,
        contactPersonFirstName:  el[5].value,
        contactPersonLastName:   el[6].value,
        contactPersonEmail:      el[7].value,
        contactPersonTelephone:  el[8].value,
        applicationId: "opremier",
        merchantId: this.user.getUserSession().organization,
        userId: this.user.getUserSession().id
      }

      this.http.post<any>(this.api.ORGANIZATION+"/branches", payload).subscribe(
        res =>{
          this.spinner.hide()
          if( res.code == 401 ){
            this.error=res.description;
            this.success=false
          }
      });
    }

  }


}
