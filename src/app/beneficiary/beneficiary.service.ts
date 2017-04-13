import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import { Uploader } from 'angular2-http-file-upload';
import { UploadItem } from 'angular2-http-file-upload';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {Beneficiary} from './model/beneficiary.interface';

@Injectable()
export class BeneficiaryService{
    private beneficiaryFetchUrl='../api/json/beneficiary/bene.json';//'http://172.24.18.214:8080/CSR/beneficiaries';//
    private beneficiaryUpdateUrl='../api/json/beneficiary/dummy.json';
    private tabFetchUrl='../api/json/beneficiary/tabs.json';
    private docUploadUrl='../api/json/beneficiary/dummy.json';
    private beneficiaryPostUrl='';
    
    constructor(private _http:Http){
    }

    getBeneficiaries():Observable<Beneficiary[]>{
        return this._http.get(this.beneficiaryFetchUrl)
        .map((response:Response) => response.json())
        .do(data => console.log('All '+JSON.stringify(data)))
        .catch(this.handleError);
    }

    getBeneficiary(id:number):Observable<Beneficiary>{
        return this.getBeneficiaries()
        .map((beneficiaries: Beneficiary[]) => beneficiaries.find(beneficiary => beneficiary.benficiaryId === id))
        .do(data => console.log(data));
    }

    putBeneficiary(beneficiary:Beneficiary):Observable<any>{
        console.log(JSON.stringify(beneficiary));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this.beneficiaryUpdateUrl,beneficiary,options)
        .map(res => res.json());
    }
    
    postBeneficiary(beneficiary:Beneficiary):Observable<any>{
        console.log(JSON.stringify(beneficiary));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this.beneficiaryPostUrl,beneficiary,options)
        .map(res => res.json());
    }

    postDocument(document:File):Observable<any>{
        console.log("Document name is "+document.name);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this.docUploadUrl,document,options)
        .map(res => res.json());
    }
    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}