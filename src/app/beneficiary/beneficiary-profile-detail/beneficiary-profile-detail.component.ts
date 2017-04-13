import { Component, Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Beneficiary } from '../model//beneficiary.interface';
import { BeneficiaryService } from '../beneficiary.service';

@Component({
    moduleId: module.id,
    selector: 'beneficiary-profile',
    templateUrl: 'beneficiary-profile-detail.component.html',
    styleUrls: ['beneficiary-profile-detail.component.css']
})
export class BeneficiaryProfileDetailComponent{
    noneUpdated:boolean=true;
    @Input() beneficiary:Beneficiary;
    form:FormGroup;
    errorMessage:string;
    name="Manju"

    constructor(fb:FormBuilder,private _route : ActivatedRoute,private _router:Router,private _service:BeneficiaryService){
            this.form=fb.group({
            'name':["",Validators.compose([Validators.required])],
            'secretaryName':["",Validators.required],
            'address':["",Validators.required],
            'city':["",Validators.required],
            'state':["",Validators.required],
            'phoneNo':[0,Validators.required],
            'emailAddr':["name",Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")])],
            'faxNo':[2,Validators.required],
            'accNo':[2,Validators.required],
            'panNo':[1,Validators.required]
        })
        }
    ngOnInit(){
        console.log(this.beneficiary);
        this.form.controls['name'].setValue(this.beneficiary.benficiaryName);
        this.form.controls['secretaryName'].setValue(this.beneficiary.benficiarySecretaryName);
        this.form.controls['address'].setValue(this.beneficiary.benficiaryAddress);
        this.form.controls['city'].setValue(this.beneficiary.benficiaryCity);
        this.form.controls['state'].setValue(this.beneficiary.benficiaryState);
        this.form.controls['phoneNo'].setValue(this.beneficiary.benficiaryPhoneNumber);
        this.form.controls['emailAddr'].setValue(this.beneficiary.emailAddr);
        this.form.controls['faxNo'].setValue(this.beneficiary.faxNo);
        this.form.controls['accNo'].setValue(this.beneficiary.accNo);
        this.form.controls['panNo'].setValue(this.beneficiary.panNumber);
    }
    updateBeneficiary(){
        console.log(this.form.value);
        this._service.putBeneficiary(this.form.value)
        .subscribe(data => console.log(data),error => console.log(JSON.stringify(error)))
    }
}