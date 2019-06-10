import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementPageComponent } from './user-management-page/user-management-page.component';
import { MatTabsModule } from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [UserManagementPageComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatTabsModule,
    NgxChartsModule,
  ]
})
export class UserManagementModule { }
