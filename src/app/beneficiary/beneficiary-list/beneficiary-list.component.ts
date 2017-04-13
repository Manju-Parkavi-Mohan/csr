import { Component } from '@angular/core';
import { Beneficiary } from '../model/beneficiary.interface';
import { BeneficiaryService } from '../beneficiary.service';
@Component({
    moduleId: module.id,
    selector:'beneficiary',
    templateUrl:'beneficiary-list.component.html',
    styleUrls:['beneficiary-list.component.css']
})
export class BeneficiaryListComponent{
    beneficiaries:Beneficiary[];
    errorMessage:string;
    constructor(private _service:BeneficiaryService){
    }
    ngOnInit():void{
        this._service.getBeneficiaries()
        .subscribe(beneficiaries => {this.beneficiaries = beneficiaries},
        error=> this.errorMessage=<any>error);
    }
}