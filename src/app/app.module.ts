import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { RouterModule, Routes } from '@angular/router';

import { CommonService } from './service/data.service';

import { TableComponent } from './table/table.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule,
    Ng2SmartTableModule,
   
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
