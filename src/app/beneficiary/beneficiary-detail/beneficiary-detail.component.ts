import { Component} from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { BeneficiaryService } from '../beneficiary.service';
import { Beneficiary } from '../model/beneficiary.interface';
@Component({
    moduleId: module.id,
    templateUrl:'beneficiary-detail.component.html',
    styleUrls: ['beneficiary-detail.component.css']
})
export class BeneficiaryDetailComponent{

    beneficiary:Beneficiary;
    errorMessage:string;
    beneficiaryName:string

    constructor(private _route : ActivatedRoute,private _router:Router,private _service:BeneficiaryService){
    }

    ngOnInit():void{
        let id= +this._route.snapshot.params['id'];
        if(!isNaN(id)){
            console.log("I am away from null");
            this._service.getBeneficiary(id)
            .subscribe(beneficiary => {this.beneficiary=beneficiary,this.beneficiaryName=beneficiary.benficiaryName},
            error=>this.errorMessage=<any>error);
        }
        else{
            this.beneficiary={accNo:null,benficiaryAddress:'',benficiaryCity:'',documents:{type:"",imgUrl:null},emailAddr:'',faxNo:null,benficiaryId:null,benficiaryName:'',panNumber:null,benficiaryPhoneNumber:null,benficiarySecretaryName:'',benficiaryState:'',benficiaryStatus:'',fcraNumber:''};         
        }
    }
}