import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';

@NgModule({
    imports:[
        RouterModule.forRoot([
            {path:'dashboard',component:DashboardComponent},
            {path:'events',component:EventComponent},
            {path:'',redirectTo:'dashboard',pathMatch: 'full'}
        ])
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}