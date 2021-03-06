export interface Beneficiary{
    benficiaryId:number,
    benficiaryName:string,
    benficiarySecretaryName:string,
    benficiaryAddress:string,
    benficiaryPhoneNumber:number,
    emailAddr:string,
    benficiaryCity:string,
    faxNo:number,
    benficiaryState:string,
    accNo:number,
    panNumber:number,
    benficiaryStatus:string,
    fcraNumber:string,
    documents:{
        type:string,
        imgUrl:URL
    }
}