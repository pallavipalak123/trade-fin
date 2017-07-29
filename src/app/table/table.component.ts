import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonService } from '../service/data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    public data;
  constructor(public commonService:CommonService, private http: Http){
   
  }

  settings = {
    actions:false,
  columns: {
    invoiceno: {
      title: 'INVOICENO',
      filter: false,  
    },
    pono: {
      title: 'PONO',
      filter: false,
    },
    shipnoticeno: {
      title: 'SHIPNOTICENO',
      filter: false
    },
    dealer: {
      title: 'DEALER',
      filter: false
    },
    shipdate: {
      title: 'SHIPDATE',
      filter: false
    },
    shipfrom: {
      title: 'SHIPFROM',
      filter: false
    },
    shipto: {
      title: 'SHIPTO',
      filter: false
    },
    totalamount: {
      title: 'TOTALAMOUNT',
      filter: false
    },
    remarks: {
      title: 'REMARKS',
      filter: false
    },
    status: {
      title: 'STATUS',
      filter: false
    },
    icon:{
      title: 'ICON',
      filter: false
    }
  }
};
  ngOnInit(): void{
    this.commonService.getData().subscribe(response=>{
      this.data=response;
    console.log(this.data)
    })
  }

}
