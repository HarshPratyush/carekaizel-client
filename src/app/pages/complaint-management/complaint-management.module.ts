import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintManagementRoutingModule } from './complaint-management-routing.module';
import { ComplaintManagementPageComponent } from './complaint-management-page/complaint-management-page.component';

@NgModule({
  declarations: [ComplaintManagementPageComponent],
  imports: [
    CommonModule,
    ComplaintManagementRoutingModule
  ]
})
export class ComplaintManagementModule { }
