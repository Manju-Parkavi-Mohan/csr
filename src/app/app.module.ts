import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule }  from '@angular/common';
import { CollapseModule } from 'ng2-bootstrap/collapse';
import { ModalModule } from 'ng2-bootstrap';
import { CalendarModule } from 'angular-calendar';

import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventModule } from './event/event.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    BeneficiaryModule,
    CollapseModule.forRoot(),
    AppRoutingModule,
    ModalModule.forRoot(),
    CalendarModule.forRoot(),
    EventModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
