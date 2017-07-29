import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/data.service';
import { Http } from "@angular/http";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

//Initializing variables
companyDetails: any={
  companyName1:'',
  address1:'',
  pan1:'',
  gstin1:'',
  
  billTo:'',
  companyName2:'',
  address2:'',
  gstin2:'',
  pan2:'',
  
  shipTo:'',
  companyName3:'',
  address3:'',
  gstin3:'',
  pan3:'',
};
companyTable=[];

public data;


  constructor(public commonService:CommonService, private http: Http) { }

  ngOnInit(){
    this.commonService.getDetails().subscribe(response=>{
      this.data=response;
     

    this.companyDetails.companyName1=this.data[0][0].companyName;
    this.companyDetails.address1=this.data[0][0].address;
    this.companyDetails.pan1=this.data[0][0].pan;
    this.companyDetails.gstin1=this.data[0][0].gstin;
    
    this.companyDetails.billTo2=this.data[0][1].billTo;
    this.companyDetails.companyName2=this.data[0][1].companyName;
    this.companyDetails.address2=this.data[0][1].address;
    this.companyDetails.gstin2=this.data[0][1].gstin;
    this.companyDetails.pan2=this.data[0][1].pan;
    
    this.companyDetails.shipTo3=this.data[0][2].shipTo;
    this.companyDetails.companyName3=this.data[0][2].companyName;
    this.companyDetails.address3=this.data[0][2].address;
    this.companyDetails.gstin3=this.data[0][2].gstin;
    this.companyDetails.pan3=this.data[0][2].pan;

    
    this.companyTable=this.data[1];
     
    console.log(this.data[1][0].sno)
    
    })
  }

}
