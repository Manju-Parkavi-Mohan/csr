import { Pipe,PipeTransform } from '@angular/core';
import { Beneficiary } from './model/beneficiary.interface';
@Pipe({
    name:'beneficiaryListFilter'
})
export class BeneficiaryListFilterPipe implements PipeTransform{
    transform( value:Beneficiary[], cityFilterBy:string, nameFilterBy:string ) : Beneficiary[]{
        if(nameFilterBy) //&& !cityFilterBy)
        {
            nameFilterBy ? nameFilterBy.toLocaleLowerCase : null;
            console.log(nameFilterBy ? value.filter((beneficiary:Beneficiary) => beneficiary.benficiaryName.toLocaleLowerCase().indexOf(nameFilterBy)!=-1) : value);
            value=value.filter((beneficiary:Beneficiary) => beneficiary.benficiaryName.toLocaleLowerCase().indexOf(nameFilterBy)!=-1);
        
        }
        console.log(value);
        if(cityFilterBy )//&& !nameFilterBy)
        {
            cityFilterBy ? cityFilterBy.toLocaleLowerCase : null;
            console.log(cityFilterBy ? value.filter((beneficiary:Beneficiary) => beneficiary.benficiaryCity.toLocaleLowerCase().indexOf(cityFilterBy)!=-1) : value);
            value=value.filter((beneficiary:Beneficiary) => beneficiary.benficiaryCity.toLocaleLowerCase().indexOf(cityFilterBy)!=-1);
        } 

        /*if(nameFilterBy && cityFilterBy){
            var val=value.filter((beneficiary:Beneficiary) => beneficiary.benficiaryName.toLocaleLowerCase().indexOf(nameFilterBy)!=-1);
            return val.filter((beneficiary:Beneficiary) => beneficiary.benficiaryCity.toLocaleLowerCase().indexOf(cityFilterBy)!=-1);
        }*/
        return value;
    }
}